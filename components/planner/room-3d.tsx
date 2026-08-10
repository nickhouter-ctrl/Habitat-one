"use client";

// 3D-aanzicht van de keuken. Realistisch gerenderd: echte slagschaduwen,
// omgevingsbelichting, material-textures (hout, marmer, geborsteld metaal),
// kasten met sokkel en front-stijl.
//
// Interactie: klik een element om het te selecteren, sleep het om het te
// verplaatsen (het klikt vast tegen wanden en buren, net als in 2D). Tijdens
// het slepen staat de camera vast; een botsend element kleurt rood en springt
// bij loslaten terug. De ruimte heeft vier wanden; wanden tussen de camera en
// de keuken worden automatisch verborgen (dollhouse-weergave).

import { Suspense, useEffect, useMemo, useRef, useState, type RefObject } from "react";
import { Canvas, useFrame, useThree, type ThreeEvent } from "@react-three/fiber";
import { Environment, Lightformer, OrbitControls, RoundedBox, useTexture } from "@react-three/drei";
import { RepeatWrapping, type Group, type Ray, type Texture } from "three";
import { getCarcass, type Carcass, type CarcassColor } from "@/lib/data/metod";
import { getAppliance, type ApplianceCategory } from "@/lib/planner/appliances";
import { getFrontFinish, getWorktopFinish } from "@/lib/planner/catalog";
import { designHasCollision, itemFootprint, snapItem } from "@/lib/planner/layout";
import { usePlanner } from "@/lib/planner/store";
import type { KitchenDesign, PlacedItem, WallSide } from "@/lib/planner/types";

const HANG_HEIGHT_CM = 145;
const WORKTOP_THICKNESS_CM = 4;
const COUNTER_TOP_CM = 80;
const PLINTH_H = 12;
const PLINTH_INSET = 4;
// Smalle voegnaad tussen fronten — strak, greeploos zoals een maatwerkkeuken.
const GAP = 0.5;
const WALL_THICKNESS = 8;
const RECESS = "#272320";
const STEEL_LIGHT = "#cdd2d8";
const GLASS = "#191b1f";
const HIGHLIGHT = "#c2703f";
// Botsingskleur — wint van de selectiekleur zodat een conflict altijd opvalt.
const COLLISION = "#dc2626";
// Verplaatsing (cm) vanaf het startpunt waarna een sleep geen klik meer is.
const DRAG_THRESHOLD_CM = 2;

const CARCASS_HEX: Record<CarcassColor, string> = {
  wit: "#ece6da",
  "houtpatroon-zwart": "#3f3930",
};

// Tint waarmee de houttextuur per afwerking wordt vermenigvuldigd.
const WOOD_TINT: Record<string, string> = {
  "eiken-naturel": "#efe1c6",
  "eiken-whitewash": "#f4eede",
  "eiken-gerookt": "#a98b63",
  "eiken-zwart": "#5a4d3f",
  bamboe: "#ecd8a4",
};

function shade(hex: string, factor: number): string {
  const n = parseInt(hex.replace("#", ""), 16);
  const r = Math.round(Math.min(255, ((n >> 16) & 255) * factor));
  const g = Math.round(Math.min(255, ((n >> 8) & 255) * factor));
  const b = Math.round(Math.min(255, (n & 255) * factor));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function applianceCategoryOf(item: PlacedItem): ApplianceCategory | null {
  if (item.kind !== "appliance" || !item.applianceId) return null;
  return getAppliance(item.applianceId)?.category ?? null;
}

function itemHeightCm(item: PlacedItem): number {
  if (item.carcassId) return getCarcass(item.carcassId)?.h ?? 80;
  if (item.applianceId) return getAppliance(item.applianceId)?.heightCm ?? 80;
  return 80;
}

/** Onderkant (vloer-y, cm) — een opzetkast staat bovenop de hoge kast eronder. */
function itemBottomCm(item: PlacedItem, design: KitchenDesign): number {
  if (item.layer === "base") return 0;
  const c = item.carcassId ? getCarcass(item.carcassId) : null;
  if (c && c.placement === "opzet") {
    // Een opzetkast staat bovenop de kast eronder: op een hoge kast (op de
    // vloer) op diens hoogte, of op een bovenkast op 145 + diens hoogte.
    const supports = design.items.filter(
      (o) =>
        o.instanceId !== item.instanceId &&
        o.carcassId &&
        (o.layer === "base" || o.layer === "wall") &&
        Math.abs(o.cx - item.cx) < 20 &&
        Math.abs(o.cy - item.cy) < 20,
    );
    const wallSup = supports.find((o) => o.layer === "wall");
    if (wallSup?.carcassId) return HANG_HEIGHT_CM + (getCarcass(wallSup.carcassId)?.h ?? 0);
    const baseSup = supports.find((o) => o.layer === "base");
    if (baseSup?.carcassId) return getCarcass(baseSup.carcassId)?.h ?? 0;
    return Math.max(0, design.ceilingHeightCm - c.h);
  }
  return HANG_HEIGHT_CM;
}

/** Indeling van het front: aantal kolommen en rijen panelen. */
function frontGrid(carcass: Carcass, layer: "base" | "wall"): { cols: number; rows: number } {
  if (carcass.placement === "hoog") return { cols: 1, rows: 2 };
  // Onderkasten als strakke deuren (1 deur, brede kasten 2) i.p.v. ladefronten —
  // greeploos en rustig, zoals een maatwerkkeuken. Lades blijven onder de
  // kookplaat/spoelbak (zie de cooktop/sink-render hieronder).
  if (layer === "base") return { cols: carcass.b >= 80 ? 2 : 1, rows: 1 };
  return { cols: carcass.b >= 75 ? 2 : 1, rows: 1 };
}

/** Werkblad-materiaal, afgeleid van de gekozen werkblad-afwerking. */
interface WorktopMaterial {
  color: string;
  roughness: number;
  metalness: number;
  map?: Texture;
  normalMap?: Texture;
}

export function Room3D({
  selectedId,
  onSelect,
  captureRef,
}: {
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  /** Wordt gevuld met een functie die het 3D-canvas als PNG-dataURL teruggeeft. */
  captureRef?: RefObject<(() => string) | null>;
}) {
  const { design } = usePlanner();
  const { roomWidthCm: rw, roomDepthCm: rd, ceilingHeightCm: ch } = design;
  const span = Math.max(rw, rd);
  // Tijdens het slepen van een kast staat de orbit-camera uit, anders draait
  // de hele scène mee met de sleepbeweging.
  const [dragging, setDragging] = useState(false);

  return (
    <Canvas
      shadows
      // Alleen renderen wanneer er iets verandert (state, camera, textures) —
      // een stilstaande planner kost zo geen GPU-tijd.
      frameloop="demand"
      dpr={[1, 2]}
      camera={{ position: [rw * 0.85, ch * 1.3, rd * 1.5], fov: 46 }}
      onPointerMissed={() => onSelect(null)}
      style={{ touchAction: "none" }}
    >
      <color attach="background" args={["#efe8d8"]} />
      <ambientLight intensity={0.28} />
      <directionalLight
        position={[rw * 0.55, ch * 2.3, rd * 1.1]}
        intensity={0.95}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0009}
        shadow-camera-near={1}
        shadow-camera-far={ch * 5}
        shadow-camera-left={-span}
        shadow-camera-right={span}
        shadow-camera-top={span}
        shadow-camera-bottom={-span}
      />
      <Environment resolution={256} frames={1}>
        <Lightformer
          intensity={2.4}
          position={[0, 6, 0]}
          rotation-x={Math.PI / 2}
          scale={[12, 12, 1]}
          color="#fff6e8"
        />
        <Lightformer intensity={0.7} position={[6, 2, 4]} scale={[7, 7, 1]} color="#fff2dc" />
        <Lightformer intensity={0.5} position={[-6, 2, -3]} scale={[7, 7, 1]} color="#e9eef3" />
      </Environment>

      <Suspense fallback={null}>
        <Scene selectedId={selectedId} onSelect={onSelect} onDraggingChange={setDragging} />
      </Suspense>

      <CaptureBridge captureRef={captureRef} />

      <OrbitControls
        target={[0, 95, 0]}
        maxPolarAngle={Math.PI / 2.08}
        minDistance={140}
        maxDistance={span * 3}
        enabled={!dragging}
        makeDefault
      />
    </Canvas>
  );
}

/** Stelt een functie beschikbaar om het 3D-canvas als PNG-dataURL vast te leggen. */
function CaptureBridge({ captureRef }: { captureRef?: RefObject<(() => string) | null> }) {
  const gl = useThree((s) => s.gl);
  const scene = useThree((s) => s.scene);
  const camera = useThree((s) => s.camera);
  useEffect(() => {
    if (!captureRef) return;
    captureRef.current = () => {
      gl.render(scene, camera);
      return gl.domElement.toDataURL("image/png");
    };
    return () => {
      captureRef.current = null;
    };
  }, [gl, scene, camera, captureRef]);
  return null;
}

/** Scène-inhoud — laadt de textures en rendert de ruimte met alle elementen. */
function Scene({
  selectedId,
  onSelect,
  onDraggingChange,
}: {
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  onDraggingChange: (dragging: boolean) => void;
}) {
  const { design } = usePlanner();
  const wood = useTexture({ map: "/textures/wood/color.jpg", normalMap: "/textures/wood/normal.jpg" });
  const marble = useTexture({
    map: "/textures/marble/color.jpg",
    normalMap: "/textures/marble/normal.jpg",
  });
  const metal = useTexture({ map: "/textures/metal/color.jpg", normalMap: "/textures/metal/normal.jpg" });

  const finish = getFrontFinish(design.frontFinishId);
  const isWood = finish?.isWood ?? false;
  const cabinetColor = finish?.hex ?? CARCASS_HEX[design.carcassColor];
  const panelColor = isWood ? (finish && WOOD_TINT[finish.id]) || "#e9dcc0" : cabinetColor;
  const panelMap = isWood ? wood.map : undefined;
  const panelNormal = isWood ? wood.normalMap : undefined;

  // Werkblad-materiaal uit de gekozen afwerking. Zonder keuze: wit marmer.
  // De texture volgt de materiaalfamilie: hout voor massief eiken, metaal
  // voor RVS, steen (marmer-normalmap) voor de rest.
  const worktop = useMemo<WorktopMaterial>(() => {
    const w = getWorktopFinish(design.worktopId ?? null);
    if (!w) {
      return { color: "#ffffff", roughness: 0.25, metalness: 0.04, map: marble.map, normalMap: marble.normalMap };
    }
    if (w.id === "eiken-massief") {
      return { color: w.hex, roughness: w.roughness, metalness: 0, map: wood.map, normalMap: wood.normalMap };
    }
    if (w.id === "rvs") {
      return { color: w.hex, roughness: w.roughness, metalness: 0.7, map: metal.map, normalMap: metal.normalMap };
    }
    return { color: w.hex, roughness: w.roughness, metalness: 0.04, normalMap: marble.normalMap };
  }, [design.worktopId, wood, marble, metal]);

  return (
    <>
      <Room design={design} wood={wood} />
      {design.items.map((item) => (
        <Item
          key={item.instanceId}
          item={item}
          design={design}
          panelColor={panelColor}
          panelMap={panelMap}
          panelNormal={panelNormal}
          worktop={worktop}
          metal={metal}
          selected={item.instanceId === selectedId}
          colliding={designHasCollision(design, item)}
          onSelect={onSelect}
          onDraggingChange={onDraggingChange}
        />
      ))}
    </>
  );
}

/**
 * De ruimte: houten vloer plus vier wanden met plint. Elke wand (inclusief
 * zijn ramen/deuren) verdwijnt automatisch zodra de camera erbuiten staat,
 * zodat de keuken vanuit elke hoek zichtbaar blijft (dollhouse-weergave).
 */
function Room({
  design,
  wood,
}: {
  design: KitchenDesign;
  wood: { map: Texture; normalMap: Texture };
}) {
  const { roomWidthCm: rw, roomDepthCm: rd, ceilingHeightCm: ch } = design;

  // Eigen kopie van de houttextuur voor de vloer: de herhaling schaalt met de
  // ruimte en mag de gedeelde (gecachte) kast-textuur niet aanpassen.
  const floorMap = useMemo(() => {
    const m = wood.map.clone();
    m.wrapS = m.wrapT = RepeatWrapping;
    m.repeat.set(rw / 120, rd / 120);
    m.needsUpdate = true;
    return m;
  }, [wood.map, rw, rd]);

  const topWall = useRef<Group>(null);
  const bottomWall = useRef<Group>(null);
  const leftWall = useRef<Group>(null);
  const rightWall = useRef<Group>(null);

  // Dollhouse: verberg een wand wanneer de camera aan de buitenkant ervan
  // staat (de wand zou dan tussen de camera en de keuken in zitten).
  useFrame(({ camera }) => {
    if (topWall.current) topWall.current.visible = camera.position.z > -rd / 2;
    if (bottomWall.current) bottomWall.current.visible = camera.position.z < rd / 2;
    if (leftWall.current) leftWall.current.visible = camera.position.x > -rw / 2;
    if (rightWall.current) rightWall.current.visible = camera.position.x < rw / 2;
  });

  const wallRefs: Record<WallSide, RefObject<Group | null>> = {
    top: topWall,
    bottom: bottomWall,
    left: leftWall,
    right: rightWall,
  };

  const walls: {
    side: WallSide;
    position: [number, number, number];
    size: [number, number, number];
    rotationY: number;
    /** Lengte van de wand in cm — voor plint en openingen. */
    lengthCm: number;
  }[] = [
    { side: "top", position: [0, ch / 2, -rd / 2 - WALL_THICKNESS / 2], size: [rw + WALL_THICKNESS * 2, ch, WALL_THICKNESS], rotationY: 0, lengthCm: rw },
    { side: "bottom", position: [0, ch / 2, rd / 2 + WALL_THICKNESS / 2], size: [rw + WALL_THICKNESS * 2, ch, WALL_THICKNESS], rotationY: Math.PI, lengthCm: rw },
    { side: "left", position: [-rw / 2 - WALL_THICKNESS / 2, ch / 2, 0], size: [WALL_THICKNESS, ch, rd], rotationY: Math.PI / 2, lengthCm: rd },
    { side: "right", position: [rw / 2 + WALL_THICKNESS / 2, ch / 2, 0], size: [WALL_THICKNESS, ch, rd], rotationY: -Math.PI / 2, lengthCm: rd },
  ];

  return (
    <group>
      {/* Vloer — warme eikenplanken. */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[rw, rd]} />
        <meshStandardMaterial
          color="#d9c3a3"
          map={floorMap}
          normalMap={wood.normalMap}
          roughness={0.75}
        />
      </mesh>
      {walls.map((w) => (
        <group key={w.side} ref={wallRefs[w.side]}>
          <mesh position={w.position} receiveShadow>
            <boxGeometry args={w.size} />
            <meshStandardMaterial color="#f4efe3" roughness={0.95} />
          </mesh>
          {/* Plint langs de voet van de wand. */}
          <Skirting side={w.side} rw={rw} rd={rd} lengthCm={w.lengthCm} />
          <WallOpenings design={design} side={w.side} rotationY={w.rotationY} />
        </group>
      ))}
    </group>
  );
}

/** Witte plint langs de voet van één wand — subtiel maar maakt het af. */
function Skirting({
  side,
  rw,
  rd,
  lengthCm,
}: {
  side: WallSide;
  rw: number;
  rd: number;
  lengthCm: number;
}) {
  const h = 9;
  const t = 1.4;
  const position: [number, number, number] =
    side === "top"
      ? [0, h / 2, -rd / 2 + t / 2]
      : side === "bottom"
        ? [0, h / 2, rd / 2 - t / 2]
        : side === "left"
          ? [-rw / 2 + t / 2, h / 2, 0]
          : [rw / 2 - t / 2, h / 2, 0];
  const horizontal = side === "top" || side === "bottom";
  return (
    <mesh position={position} receiveShadow>
      <boxGeometry args={horizontal ? [lengthCm, h, t] : [t, h, lengthCm]} />
      <meshStandardMaterial color="#faf6ec" roughness={0.6} />
    </mesh>
  );
}

/** Ramen en deuren van één wand, gepositioneerd langs die wand. */
function WallOpenings({
  design,
  side,
  rotationY,
}: {
  design: KitchenDesign;
  side: WallSide;
  rotationY: number;
}) {
  const { roomWidthCm: rw, roomDepthCm: rd } = design;
  return (
    <>
      {design.openings
        .filter((o) => o.wall === side)
        .map((o) => {
          const isWindow = o.kind === "window";
          const h = isWindow ? 125 : 211;
          const cy = isWindow ? 150 : h / 2;
          // offsetCm is gemeten vanaf de starthoek: top/bottom vanaf links,
          // left/right vanaf boven (zie lib/planner/types.ts).
          let position: [number, number, number];
          switch (side) {
            case "top":
              position = [o.offsetCm - rw / 2, cy, -rd / 2 + 1];
              break;
            case "bottom":
              position = [o.offsetCm - rw / 2, cy, rd / 2 - 1];
              break;
            case "left":
              position = [-rw / 2 + 1, cy, o.offsetCm - rd / 2];
              break;
            default:
              position = [rw / 2 - 1, cy, o.offsetCm - rd / 2];
          }
          return (
            <OpeningPanel
              key={o.id}
              kind={o.kind}
              position={position}
              rotationY={rotationY}
              w={o.widthCm}
              h={h}
            />
          );
        })}
    </>
  );
}

function OpeningPanel({
  kind,
  position,
  rotationY,
  w,
  h,
}: {
  kind: "window" | "door";
  position: [number, number, number];
  rotationY: number;
  w: number;
  h: number;
}) {
  const isWindow = kind === "window";
  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      <mesh castShadow>
        <boxGeometry args={[w + 9, h + 9, 3.5]} />
        <meshStandardMaterial color={isWindow ? "#eae5d8" : "#d4ccba"} roughness={0.6} />
      </mesh>
      <mesh position={[0, 0, 1.9]}>
        <boxGeometry args={[w, h, 1]} />
        {isWindow ? (
          <meshStandardMaterial
            color="#bdd7e2"
            emissive="#d4e6ec"
            emissiveIntensity={0.55}
            roughness={0.08}
            metalness={0.1}
          />
        ) : (
          <meshStandardMaterial color="#9a8f79" roughness={0.62} />
        )}
      </mesh>
      {/* Deurkruk — alleen op deuren. */}
      {!isWindow && (
        <mesh position={[w / 2 - 9, -6, 3]} castShadow>
          <cylinderGeometry args={[1.1, 1.1, 12, 12]} />
          <meshStandardMaterial color="#8d949c" metalness={0.8} roughness={0.25} />
        </mesh>
      )}
    </group>
  );
}

interface PanelProps {
  cx: number;
  cy: number;
  z: number;
  w: number;
  h: number;
  color: string;
  map?: Texture;
  normalMap?: Texture;
  style: string;
  emissive: string;
  emissiveIntensity: number;
}

/** Eén deur-/ladepaneel op het front van een kast, in de gekozen front-stijl. */
function Panel({ cx, cy, z, w, h, color, map, normalMap, style, emissive, emissiveIntensity }: PanelProps) {
  const baseDoor = (
    <RoundedBox
      args={[w, h, 2.6]}
      radius={0.6}
      smoothness={3}
      position={[cx, cy, z]}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial
        color={color}
        map={map}
        normalMap={normalMap}
        roughness={0.52}
        emissive={emissive}
        emissiveIntensity={emissiveIntensity}
      />
    </RoundedBox>
  );

  // Shaker — kader met een verdiept middenpaneel.
  if (style === "shaker" || style === "shaker-small") {
    const frame = style === "shaker" ? 7 : 4.2;
    const iw = w - frame * 2;
    const ih = h - frame * 2;
    return (
      <group>
        {baseDoor}
        {iw > 7 && ih > 7 && (
          <RoundedBox
            args={[iw, ih, 2]}
            radius={0.4}
            smoothness={3}
            position={[cx, cy, z - 0.5]}
            receiveShadow
          >
            <meshStandardMaterial
              color={color}
              map={map}
              normalMap={normalMap}
              roughness={0.6}
              emissive={emissive}
              emissiveIntensity={emissiveIntensity}
            />
          </RoundedBox>
        )}
      </group>
    );
  }

  // Lamellen — verticale groeflijnen over het front.
  if (style === "grooved") {
    const count = Math.max(2, Math.round(w / 8));
    const grooveColor = shade(color, 0.55);
    const lines = [];
    for (let i = 1; i < count; i++) {
      lines.push(
        <mesh key={i} position={[cx - w / 2 + (i * w) / count, cy, z + 1.15]}>
          <boxGeometry args={[0.9, h - 5, 1.6]} />
          <meshStandardMaterial color={grooveColor} roughness={0.6} />
        </mesh>,
      );
    }
    return (
      <group>
        {baseDoor}
        {lines}
      </group>
    );
  }

  return baseDoor;
}

/** Raster van panelen dat een front-vlak vult. */
function PanelGrid({
  w,
  h,
  baseY,
  z,
  cols,
  rows,
  color,
  map,
  normalMap,
  style,
  emissive,
  emissiveIntensity,
}: {
  w: number;
  h: number;
  baseY: number;
  z: number;
  cols: number;
  rows: number;
  color: string;
  map?: Texture;
  normalMap?: Texture;
  style: string;
  emissive: string;
  emissiveIntensity: number;
}) {
  const pw = (w - (cols + 1) * GAP) / cols;
  const ph = (h - (rows + 1) * GAP) / rows;
  if (pw <= 0 || ph <= 0) return null;
  const panels = [];
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      panels.push(
        <Panel
          key={`${c}-${r}`}
          cx={-w / 2 + GAP + c * (pw + GAP) + pw / 2}
          cy={baseY + GAP + r * (ph + GAP) + ph / 2}
          z={z}
          w={pw}
          h={ph}
          color={color}
          map={map}
          normalMap={normalMap}
          style={style}
          emissive={emissive}
          emissiveIntensity={emissiveIntensity}
        />,
      );
    }
  }
  return <>{panels}</>;
}

/** Sleepstatus van één element — leeft in een ref, want per pointer-event. */
interface DragState {
  origCx: number;
  origCy: number;
  /** Verschil tussen het item-middelpunt en het raakpunt bij het oppakken. */
  offX: number;
  offZ: number;
  moved: boolean;
}

/**
 * Interactieve wrapper om een 3D-element: positioneert/roteert de groep en
 * regelt selecteren (klik) en verplaatsen (slepen). Het slepen projecteert de
 * muisstraal op het draagvlak van de laag (vloer of ophanghoogte), stuurt
 * MOVE_ITEM tijdens de beweging en SNAP_ITEM bij loslaten. Zou de snap-positie
 * botsen met een ander element, dan springt het item terug naar zijn
 * beginpositie.
 */
function DraggableItem({
  item,
  design,
  onSelect,
  onDraggingChange,
  children,
}: {
  item: PlacedItem;
  design: KitchenDesign;
  onSelect: (id: string) => void;
  onDraggingChange: (dragging: boolean) => void;
  children: React.ReactNode;
}) {
  const { dispatch } = usePlanner();
  const drag = useRef<DragState | null>(null);
  const { roomWidthCm: rw, roomDepthCm: rd } = design;
  const x = item.cx - rw / 2;
  const z = item.cy - rd / 2;
  const rotY = (-item.rotation * Math.PI) / 180;
  // Draagvlak: onderkasten slepen over de vloer, bovenkasten op ophanghoogte.
  const planeY = item.layer === "base" ? 0 : HANG_HEIGHT_CM;

  /** Snijpunt van de muisstraal met het horizontale draagvlak (wereld-cm). */
  const hitPoint = (ray: Ray): { x: number; z: number } | null => {
    if (Math.abs(ray.direction.y) < 1e-6) return null;
    const t = (planeY - ray.origin.y) / ray.direction.y;
    if (t <= 0) return null;
    return {
      x: ray.origin.x + ray.direction.x * t,
      z: ray.origin.z + ray.direction.z * t,
    };
  };

  const onPointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    (e.target as Element).setPointerCapture(e.pointerId);
    onSelect(item.instanceId);
    const hit = hitPoint(e.ray);
    if (!hit) return;
    drag.current = {
      origCx: item.cx,
      origCy: item.cy,
      offX: x - hit.x,
      offZ: z - hit.z,
      moved: false,
    };
    onDraggingChange(true);
  };

  const onPointerMove = (e: ThreeEvent<PointerEvent>) => {
    const d = drag.current;
    if (!d) return;
    const hit = hitPoint(e.ray);
    if (!hit) return;
    const cx = hit.x + d.offX + rw / 2;
    const cy = hit.z + d.offZ + rd / 2;
    if (Math.hypot(cx - d.origCx, cy - d.origCy) > DRAG_THRESHOLD_CM) d.moved = true;
    if (d.moved) dispatch({ type: "MOVE_ITEM", instanceId: item.instanceId, cx, cy });
  };

  const onPointerUp = (e: ThreeEvent<PointerEvent>) => {
    const d = drag.current;
    drag.current = null;
    onDraggingChange(false);
    if (!d) return;
    (e.target as Element).releasePointerCapture(e.pointerId);
    if (!d.moved) return; // klik zonder sleep — selectie is al gebeurd
    const snapped = { ...item, ...snapItem(item, design) };
    if (designHasCollision(design, snapped)) {
      // Botsing op de eindpositie: terug naar waar het element vandaan kwam.
      dispatch({ type: "MOVE_ITEM", instanceId: item.instanceId, cx: d.origCx, cy: d.origCy });
    }
    dispatch({ type: "SNAP_ITEM", instanceId: item.instanceId });
  };

  return (
    <group
      position={[x, 0, z]}
      rotation={[0, rotY, 0]}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      {children}
    </group>
  );
}

function Item({
  item,
  design,
  panelColor,
  panelMap,
  panelNormal,
  worktop,
  metal,
  selected,
  colliding,
  onSelect,
  onDraggingChange,
}: {
  item: PlacedItem;
  design: KitchenDesign;
  panelColor: string;
  panelMap?: Texture;
  panelNormal?: Texture;
  worktop: WorktopMaterial;
  metal: { map: Texture; normalMap: Texture };
  selected: boolean;
  colliding: boolean;
  onSelect: (id: string) => void;
  onDraggingChange: (dragging: boolean) => void;
}) {
  const cat = applianceCategoryOf(item);
  const { w, d } = itemFootprint(item);
  // Botsing wint van selectie — een conflict moet altijd zichtbaar zijn.
  const emissive = colliding ? COLLISION : selected ? HIGHLIGHT : "#000000";
  const emis = colliding ? 0.45 : selected ? 0.4 : 0;
  const frontStyle = design.frontStyleId ?? "flat";

  const wrap = (children: React.ReactNode) => (
    <DraggableItem
      item={item}
      design={design}
      onSelect={onSelect}
      onDraggingChange={onDraggingChange}
    >
      {children}
    </DraggableItem>
  );

  // Afzuigkap — platte kap, hoog aan de wand.
  if (cat === "hood") {
    return wrap(
      <RoundedBox args={[w, 15, d]} radius={2} smoothness={4} position={[0, 150, 0]} castShadow>
        <meshStandardMaterial
          color="#c9ccd0"
          map={metal.map}
          normalMap={metal.normalMap}
          metalness={0.6}
          roughness={0.4}
          emissive={emissive}
          emissiveIntensity={emis}
        />
      </RoundedBox>,
    );
  }

  const h = itemHeightCm(item);
  const bottom = itemBottomCm(item, design);
  const carcass = item.carcassId ? getCarcass(item.carcassId) : null;
  const isCounter = item.layer === "base" && h <= 95;
  const frontZ = d / 2 + 0.5;
  const plinthH = item.layer === "base" ? PLINTH_H : 0;
  const frontBottom = bottom + plinthH;
  const frontH = h - plinthH;

  const body = (
    <RoundedBox
      args={[w, h, d]}
      radius={2}
      smoothness={4}
      position={[0, bottom + h / 2, 0]}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial color={RECESS} roughness={0.7} />
    </RoundedBox>
  );

  const plinth =
    plinthH > 0 ? (
      <mesh position={[0, plinthH / 2, -PLINTH_INSET / 2]} receiveShadow>
        <boxGeometry args={[w - 4, plinthH, d - PLINTH_INSET]} />
        <meshStandardMaterial color={RECESS} roughness={0.8} />
      </mesh>
    ) : null;

  const worktopMesh = isCounter ? (
    <RoundedBox
      args={[w + 2, WORKTOP_THICKNESS_CM, d + 2]}
      radius={1}
      smoothness={3}
      position={[0, COUNTER_TOP_CM + WORKTOP_THICKNESS_CM / 2, 0]}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial
        color={worktop.color}
        map={worktop.map}
        normalMap={worktop.normalMap}
        roughness={worktop.roughness}
        metalness={worktop.metalness}
      />
    </RoundedBox>
  ) : null;

  // Gewone kast — front met deur-/ladepanelen.
  if (!cat && carcass) {
    const grid = frontGrid(carcass, item.layer);
    return wrap(
      <>
        {body}
        {plinth}
        <PanelGrid
          w={w}
          h={frontH}
          baseY={frontBottom}
          z={frontZ}
          cols={grid.cols}
          rows={grid.rows}
          color={panelColor}
          map={panelMap}
          normalMap={panelNormal}
          style={frontStyle}
          emissive={emissive}
          emissiveIntensity={emis}
        />
        {worktopMesh}
      </>,
    );
  }

  // Kookplaat / spoelbak — onderkast met lades + plaat op het werkblad.
  if ((cat === "cooktop" || cat === "sink") && carcass) {
    return wrap(
      <>
        {body}
        {plinth}
        <PanelGrid
          w={w}
          h={frontH}
          baseY={frontBottom}
          z={frontZ}
          cols={1}
          rows={3}
          color={panelColor}
          map={panelMap}
          normalMap={panelNormal}
          style={frontStyle}
          emissive={emissive}
          emissiveIntensity={emis}
        />
        {worktopMesh}
        {cat === "cooktop" ? (
          <RoundedBox
            args={[Math.min(w, 78), 3, d * 0.62]}
            radius={0.6}
            smoothness={3}
            position={[0, COUNTER_TOP_CM + WORKTOP_THICKNESS_CM + 1.6, 0]}
            castShadow
          >
            <meshStandardMaterial color="#1d1f24" roughness={0.18} metalness={0.2} />
          </RoundedBox>
        ) : (
          <group>
            {/* Spoelbak — verzonken bak, vlak in het werkblad */}
            <RoundedBox
              args={[Math.min(w * 0.62, 54), 5, d * 0.46]}
              radius={0.8}
              smoothness={3}
              position={[0, COUNTER_TOP_CM + WORKTOP_THICKNESS_CM - 1.2, d * 0.04]}
              receiveShadow
            >
              <meshStandardMaterial color="#41454a" metalness={0.5} roughness={0.45} />
            </RoundedBox>
            {/* Kraan — staander */}
            <mesh position={[0, COUNTER_TOP_CM + WORKTOP_THICKNESS_CM + 13, -d * 0.24]} castShadow>
              <cylinderGeometry args={[1.1, 1.3, 26, 16]} />
              <meshStandardMaterial color="#cfd4d9" metalness={0.85} roughness={0.16} />
            </mesh>
            {/* Kraan — uitloop boven de bak */}
            <mesh position={[0, COUNTER_TOP_CM + WORKTOP_THICKNESS_CM + 25, -d * 0.24 + 6]} castShadow>
              <boxGeometry args={[2, 2, 13]} />
              <meshStandardMaterial color="#cfd4d9" metalness={0.85} roughness={0.16} />
            </mesh>
          </group>
        )}
      </>,
    );
  }

  // Inbouwapparaat in een kolomkast (oven, koelkast, vaatwasser …).
  const appliance = item.applianceId ? getAppliance(item.applianceId) : null;
  const niche = appliance?.heightCm ?? 60;
  const tallFace = cat === "fridge" || cat === "dishwasher";
  const faceH = tallFace ? frontH - 8 : Math.min(niche, frontH - 12);
  const faceY = tallFace ? frontBottom + 4 + faceH / 2 : bottom + 100;
  const faceTop = faceY + faceH / 2;
  const faceBot = faceY - faceH / 2;
  const hasWindow =
    cat === "oven" || cat === "microwave" || cat === "coffee" || cat === "winecooler";

  return wrap(
    <>
      {body}
      {plinth}
      {faceTop + GAP < bottom + h - GAP && (
        <PanelGrid
          w={w}
          h={bottom + h - faceTop - GAP}
          baseY={faceTop}
          z={frontZ}
          cols={1}
          rows={1}
          color={panelColor}
          map={panelMap}
          normalMap={panelNormal}
          style={frontStyle}
          emissive={emissive}
          emissiveIntensity={emis}
        />
      )}
      {faceBot - GAP > frontBottom + GAP && (
        <PanelGrid
          w={w}
          h={faceBot - frontBottom - GAP}
          baseY={frontBottom}
          z={frontZ}
          cols={1}
          rows={1}
          color={panelColor}
          map={panelMap}
          normalMap={panelNormal}
          style={frontStyle}
          emissive={emissive}
          emissiveIntensity={emis}
        />
      )}
      {/* Het apparaat-front. Ingebouwde koel/vries + vaatwasser krijgen een
          geïntegreerd, greeploos front in het kasthout; zichtbare apparaten
          (oven, magnetron, koffie, wijnkast) houden een geborsteld-metalen front. */}
      <RoundedBox
        args={[w - 6, faceH, 3.4]}
        radius={0.8}
        smoothness={3}
        position={[0, faceY, frontZ]}
        castShadow
      >
        <meshStandardMaterial
          color={tallFace ? panelColor : "#c5c8cc"}
          map={tallFace ? panelMap : metal.map}
          normalMap={tallFace ? panelNormal : metal.normalMap}
          metalness={tallFace ? 0 : 0.6}
          roughness={tallFace ? 0.5 : 0.36}
          emissive={emissive}
          emissiveIntensity={emis}
        />
      </RoundedBox>
      {/* Bedieningsstrip + handgreep alleen op zichtbare (niet-geïntegreerde) apparaten. */}
      {!tallFace && (
        <>
          <mesh position={[0, faceTop - 4, frontZ + 1.8]}>
            <boxGeometry args={[w - 12, 5, 1.4]} />
            <meshStandardMaterial color={STEEL_LIGHT} metalness={0.6} roughness={0.28} />
          </mesh>
          {hasWindow && faceH > 24 && (
            <mesh position={[0, faceY - 4, frontZ + 1.9]}>
              <boxGeometry args={[w - 16, faceH - 16, 1]} />
              <meshStandardMaterial color={GLASS} metalness={0.3} roughness={0.1} />
            </mesh>
          )}
          <mesh position={[0, faceTop - 9, frontZ + 2.4]}>
            <boxGeometry args={[w * 0.5, 2.4, 2.4]} />
            <meshStandardMaterial color={STEEL_LIGHT} metalness={0.7} roughness={0.22} />
          </mesh>
        </>
      )}
    </>,
  );
}
