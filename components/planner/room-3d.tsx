"use client";

// 3D-aanzicht van de keuken. Realistisch gerenderd: echte slagschaduwen,
// omgevingsbelichting, material-textures (hout, marmer, geborsteld metaal),
// kasten met sokkel en front-stijl. Klik een element aan om het te kiezen.

import { Suspense, useEffect, type RefObject } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, Lightformer, OrbitControls, RoundedBox, useTexture } from "@react-three/drei";
import type { Texture } from "three";
import { getCarcass, type Carcass, type CarcassColor } from "@/lib/data/metod";
import { getAppliance, type ApplianceCategory } from "@/lib/planner/appliances";
import { getFrontFinish } from "@/lib/planner/catalog";
import { itemFootprint } from "@/lib/planner/layout";
import { usePlanner } from "@/lib/planner/store";
import type { KitchenDesign, PlacedItem } from "@/lib/planner/types";

const HANG_HEIGHT_CM = 145;
const WORKTOP_THICKNESS_CM = 4;
const COUNTER_TOP_CM = 80;
const PLINTH_H = 12;
const PLINTH_INSET = 4;
// Smalle voegnaad tussen fronten — strak, greeploos zoals een maatwerkkeuken.
const GAP = 0.5;
const RECESS = "#272320";
const STEEL_LIGHT = "#cdd2d8";
const GLASS = "#191b1f";
const HIGHLIGHT = "#c2703f";

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

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [rw * 0.85, ch * 1.3, rd * 1.5], fov: 46 }}
      onPointerMissed={() => onSelect(null)}
    >
      <color attach="background" args={["#efe8d8"]} />
      <ambientLight intensity={0.22} />
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
        <Scene selectedId={selectedId} onSelect={onSelect} />
      </Suspense>

      <CaptureBridge captureRef={captureRef} />

      <OrbitControls
        target={[0, 95, 0]}
        maxPolarAngle={Math.PI / 2.08}
        minDistance={140}
        maxDistance={span * 3}
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
}: {
  selectedId: string | null;
  onSelect: (id: string | null) => void;
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

  return (
    <>
      <Room design={design} />
      {design.items.map((item) => (
        <Item
          key={item.instanceId}
          item={item}
          design={design}
          panelColor={panelColor}
          panelMap={panelMap}
          panelNormal={panelNormal}
          marble={marble}
          metal={metal}
          selected={item.instanceId === selectedId}
          onSelect={onSelect}
        />
      ))}
    </>
  );
}

function Room({ design }: { design: KitchenDesign }) {
  const { roomWidthCm: rw, roomDepthCm: rd, ceilingHeightCm: ch } = design;
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[rw, rd]} />
        <meshStandardMaterial color="#e3d7bc" roughness={0.92} />
      </mesh>
      <mesh position={[0, ch / 2, -rd / 2 - 2.5]} receiveShadow>
        <boxGeometry args={[rw, ch, 5]} />
        <meshStandardMaterial color="#f4efe3" roughness={0.95} />
      </mesh>
      <mesh position={[-rw / 2 - 2.5, ch / 2, 0]} receiveShadow>
        <boxGeometry args={[5, ch, rd]} />
        <meshStandardMaterial color="#ebe3d1" roughness={0.95} />
      </mesh>
      <WallOpenings design={design} />
    </group>
  );
}

/** Ramen en deuren op de zichtbare wanden (achter- en linkerwand). */
function WallOpenings({ design }: { design: KitchenDesign }) {
  const { roomWidthCm: rw, roomDepthCm: rd } = design;
  return (
    <>
      {design.openings.map((o) => {
        const isWindow = o.kind === "window";
        const h = isWindow ? 125 : 211;
        const cy = isWindow ? 150 : h / 2;
        if (o.wall === "top") {
          return (
            <OpeningPanel
              key={o.id}
              kind={o.kind}
              position={[o.offsetCm - rw / 2, cy, -rd / 2 + 1]}
              rotationY={0}
              w={o.widthCm}
              h={h}
            />
          );
        }
        if (o.wall === "left") {
          return (
            <OpeningPanel
              key={o.id}
              kind={o.kind}
              position={[-rw / 2 + 1, cy, o.offsetCm - rd / 2]}
              rotationY={Math.PI / 2}
              w={o.widthCm}
              h={h}
            />
          );
        }
        // Onder-/rechterwand worden niet getekend (camera-zijde).
        return null;
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

function Item({
  item,
  design,
  panelColor,
  panelMap,
  panelNormal,
  marble,
  metal,
  selected,
  onSelect,
}: {
  item: PlacedItem;
  design: KitchenDesign;
  panelColor: string;
  panelMap?: Texture;
  panelNormal?: Texture;
  marble: { map: Texture; normalMap: Texture };
  metal: { map: Texture; normalMap: Texture };
  selected: boolean;
  onSelect: (id: string) => void;
}) {
  const cat = applianceCategoryOf(item);
  const { w, d } = itemFootprint(item);
  const x = item.cx - design.roomWidthCm / 2;
  const z = item.cy - design.roomDepthCm / 2;
  const rotY = (-item.rotation * Math.PI) / 180;
  const emissive = selected ? HIGHLIGHT : "#000000";
  const emis = selected ? 0.4 : 0;
  const select = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    onSelect(item.instanceId);
  };
  const frontStyle = design.frontStyleId ?? "flat";

  // Afzuigkap — platte kap, hoog aan de wand.
  if (cat === "hood") {
    return (
      <group position={[x, 0, z]} rotation={[0, rotY, 0]} onClick={select}>
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
        </RoundedBox>
      </group>
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

  const worktop = isCounter ? (
    <RoundedBox
      args={[w + 2, WORKTOP_THICKNESS_CM, d + 2]}
      radius={1}
      smoothness={3}
      position={[0, COUNTER_TOP_CM + WORKTOP_THICKNESS_CM / 2, 0]}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial
        color="#ffffff"
        map={marble.map}
        normalMap={marble.normalMap}
        roughness={0.25}
        metalness={0.04}
      />
    </RoundedBox>
  ) : null;

  // Gewone kast — front met deur-/ladepanelen.
  if (!cat && carcass) {
    const grid = frontGrid(carcass, item.layer);
    return (
      <group position={[x, 0, z]} rotation={[0, rotY, 0]} onClick={select}>
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
        {worktop}
      </group>
    );
  }

  // Kookplaat / spoelbak — onderkast met lades + plaat op het werkblad.
  if ((cat === "cooktop" || cat === "sink") && carcass) {
    return (
      <group position={[x, 0, z]} rotation={[0, rotY, 0]} onClick={select}>
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
        {worktop}
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
          <mesh position={[0, COUNTER_TOP_CM + WORKTOP_THICKNESS_CM - 1, 0]}>
            <boxGeometry args={[w * 0.6, 9, d * 0.5]} />
            <meshStandardMaterial
              color="#cdd2d8"
              map={metal.map}
              normalMap={metal.normalMap}
              metalness={0.6}
              roughness={0.3}
            />
          </mesh>
        )}
      </group>
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

  return (
    <group position={[x, 0, z]} rotation={[0, rotY, 0]} onClick={select}>
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
    </group>
  );
}
