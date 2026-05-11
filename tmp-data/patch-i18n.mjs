import fs from "fs";

const spaceNames = {
  en: { "bathroom": "Bathroom", "kitchen": "Kitchen", "living-room": "Living room", "bedroom": "Bedroom", "terrace": "Terrace", "garden": "Garden", "pool-area": "Pool area", "outdoor-kitchen": "Outdoor kitchen" },
  nl: { "bathroom": "Badkamer", "kitchen": "Keuken", "living-room": "Woonkamer", "bedroom": "Slaapkamer", "terrace": "Terras", "garden": "Tuin", "pool-area": "Zwembad", "outdoor-kitchen": "Buitenkeuken" },
  es: { "bathroom": "Baño", "kitchen": "Cocina", "living-room": "Salón", "bedroom": "Dormitorio", "terrace": "Terraza", "garden": "Jardín", "pool-area": "Zona de piscina", "outdoor-kitchen": "Cocina exterior" },
  de: { "bathroom": "Badezimmer", "kitchen": "Küche", "living-room": "Wohnzimmer", "bedroom": "Schlafzimmer", "terrace": "Terrasse", "garden": "Garten", "pool-area": "Poolbereich", "outdoor-kitchen": "Außenküche" },
};

const spaceDesc = {
  en: {
    "bathroom": "The bathroom asks for surfaces that shrug off steam and water. We bring together solid-surface basins, bathtubs and shower trays, large-format stone-look boards, brushed brassware and warm light — a calm, spa-like room built to last by the sea.",
    "kitchen": "The kitchen is where the home gathers. Hard-wearing worktops, large-format wall boards behind the hob, micro-cement and warm timber fronts — finishes chosen for daily use, easy cleaning and the way Mediterranean light moves through the day.",
    "living-room": "The living room is the heart of the house. Flowing stone or warm timber floors, feature walls in Magic Flexible Stone boards, micro-cement and lime plaster — materials that frame the view, take the afternoon sun and feel good underfoot.",
    "bedroom": "The bedroom should feel quiet. Soft timber floors, warm lime or micro-cement walls, an upholstered headboard wall and gentle indirect light — a restful palette, with materials that breathe in the Costa Blanca climate.",
    "terrace": "The terrace is an outdoor room. Slip-resistant stone paving, shaded pergolas, an outdoor kitchen and built-in seating — surfaces and detailing engineered for sun, salt and the Levante wind, so they look better with every season.",
    "garden": "The garden ties the house to the land. Tumbled-stone paths, dry-stone retaining walls, native planting — olive, almond, lavender, rosemary — and considered lighting, all in materials that age gracefully outdoors.",
    "pool-area": "The pool area takes the hardest punishment of any space: chlorine, salt and full sun. We specify pool surrounds, coping, non-slip decking and outdoor showers in finishes proven to survive — and to keep looking serene.",
    "outdoor-kitchen": "The outdoor kitchen makes summer the main season. Stone or solid-surface worktops, large-format cladding, a built-in barbecue and storage, weatherproof joinery — everything detailed to live outdoors all year on the Costa Blanca.",
  },
  nl: {
    "bathroom": "De badkamer vraagt om oppervlakken die stoom en water moeiteloos doorstaan. We brengen solid-surface wastafels, baden en douchebakken, grootformaat steen-look panelen, geborsteld messing en warm licht samen — een rustige, spa-achtige ruimte, gemaakt om te blijven aan zee.",
    "kitchen": "De keuken is waar het huis samenkomt. Slijtvaste werkbladen, grootformaat wandpanelen achter de kookplaat, microcement en warme houten fronten — afwerkingen gekozen voor dagelijks gebruik, makkelijk schoonmaken en de manier waarop het mediterrane licht door de dag beweegt.",
    "living-room": "De woonkamer is het hart van het huis. Doorlopende steen- of warme houtvloeren, accentwanden in Magic Flexible Stone-panelen, microcement en kalkpleister — materialen die het uitzicht omlijsten, de middagzon opvangen en fijn aanvoelen onder de voeten.",
    "bedroom": "De slaapkamer moet rust uitstralen. Zachte houtvloeren, warme kalk- of microcementwanden, een gestoffeerde hoofdbordwand en zacht indirect licht — een rustgevend palet, met materialen die ademen in het klimaat van de Costa Blanca.",
    "terrace": "Het terras is een buitenkamer. Slipvaste stenen bestrating, schaduwrijke pergola's, een buitenkeuken en ingebouwde zitbanken — oppervlakken en details gemaakt voor zon, zout en de Levante-wind, zodat ze er met elk seizoen mooier uitzien.",
    "garden": "De tuin verbindt het huis met het land. Getrommelde stenen paden, droogstenen keermuren, inheemse beplanting — olijf, amandel, lavendel, rozemarijn — en doordachte verlichting, allemaal in materialen die buiten mooi verouderen.",
    "pool-area": "Het zwembad krijgt het zwaarst te verduren van alle ruimtes: chloor, zout en volle zon. We schrijven zwembadranden, boordstenen, antislip-terrasdelen en buitendouches voor in afwerkingen die het bewezen overleven — en sereen blijven ogen.",
    "outdoor-kitchen": "De buitenkeuken maakt van de zomer het hoofdseizoen. Werkbladen van steen of solid surface, grootformaat bekleding, een ingebouwde barbecue en opbergruimte, weerbestendig timmerwerk — alles gedetailleerd om het hele jaar buiten te leven aan de Costa Blanca.",
  },
  es: {
    "bathroom": "El baño pide superficies que aguanten el vapor y el agua sin inmutarse. Reunimos lavabos, bañeras y platos de ducha en solid surface, paneles de gran formato en aspecto piedra, grifería cepillada y luz cálida — una estancia serena, tipo spa, hecha para durar junto al mar.",
    "kitchen": "La cocina es donde se reúne la casa. Encimeras resistentes, paneles de pared de gran formato tras la zona de cocción, microcemento y frentes de madera cálida — acabados elegidos para el uso diario, la limpieza fácil y cómo se mueve la luz mediterránea a lo largo del día.",
    "living-room": "El salón es el corazón de la casa. Suelos continuos de piedra o madera cálida, paredes protagonistas en paneles Magic Flexible Stone, microcemento y enlucido de cal — materiales que enmarcan la vista, reciben el sol de la tarde y se sienten bien bajo los pies.",
    "bedroom": "El dormitorio debe transmitir calma. Suelos suaves de madera, paredes cálidas de cal o microcemento, una pared de cabecero tapizada y luz indirecta suave — una paleta de descanso, con materiales que respiran en el clima de la Costa Blanca.",
    "terrace": "La terraza es una estancia al aire libre. Pavimento de piedra antideslizante, pérgolas con sombra, una cocina exterior y bancos integrados — superficies y detalles diseñados para el sol, la sal y el viento de Levante, para que luzcan mejor cada temporada.",
    "garden": "El jardín une la casa con la tierra. Caminos de piedra envejecida, muros de contención de piedra seca, plantación autóctona — olivo, almendro, lavanda, romero — e iluminación cuidada, todo en materiales que envejecen con elegancia al exterior.",
    "pool-area": "La zona de piscina es la que más sufre: cloro, sal y sol pleno. Prescribimos perímetros de piscina, coronaciones, tarimas antideslizantes y duchas exteriores en acabados que sobreviven de verdad — y siguen luciendo serenos.",
    "outdoor-kitchen": "La cocina exterior convierte el verano en la temporada principal. Encimeras de piedra o solid surface, revestimientos de gran formato, una barbacoa y almacenaje integrados, carpintería resistente a la intemperie — todo pensado para vivir fuera todo el año en la Costa Blanca.",
  },
  de: {
    "bathroom": "Das Bad verlangt Oberflächen, die Dampf und Wasser mühelos wegstecken. Wir bringen Solid-Surface-Becken, Badewannen und Duschwannen, großformatige Platten in Steinoptik, gebürstete Armaturen und warmes Licht zusammen — ein ruhiger, spa-artiger Raum, gebaut, um am Meer zu bestehen.",
    "kitchen": "Die Küche ist, wo das Haus zusammenkommt. Strapazierfähige Arbeitsplatten, großformatige Wandplatten hinter dem Kochfeld, Mikrozement und warme Holzfronten — Oberflächen, ausgewählt für den täglichen Gebrauch, einfache Reinigung und das Spiel des mediterranen Lichts über den Tag.",
    "living-room": "Das Wohnzimmer ist das Herz des Hauses. Fließende Stein- oder warme Holzböden, Akzentwände aus Magic Flexible Stone-Platten, Mikrozement und Kalkputz — Materialien, die den Blick rahmen, die Nachmittagssonne aufnehmen und sich gut anfühlen unter den Füßen.",
    "bedroom": "Das Schlafzimmer soll Ruhe ausstrahlen. Weiche Holzböden, warme Kalk- oder Mikrozementwände, eine gepolsterte Kopfteilwand und sanftes indirektes Licht — eine erholsame Palette mit Materialien, die im Klima der Costa Blanca atmen.",
    "terrace": "Die Terrasse ist ein Raum im Freien. Rutschfestes Steinpflaster, schattige Pergolen, eine Außenküche und eingebaute Sitzbänke — Oberflächen und Details, gemacht für Sonne, Salz und den Levante-Wind, sodass sie mit jeder Saison besser aussehen.",
    "garden": "Der Garten verbindet das Haus mit dem Land. Wege aus getrommeltem Stein, Trockenstein-Stützmauern, heimische Bepflanzung — Olive, Mandel, Lavendel, Rosmarin — und durchdachte Beleuchtung, alles in Materialien, die draußen schön altern.",
    "pool-area": "Der Poolbereich wird am härtesten beansprucht: Chlor, Salz und volle Sonne. Wir geben Pooleinfassungen, Abdeckungen, rutschfeste Decks und Außenduschen in Oberflächen vor, die das bewiesenermaßen überstehen — und ruhig aussehen bleiben.",
    "outdoor-kitchen": "Die Außenküche macht den Sommer zur Hauptsaison. Arbeitsplatten aus Stein oder Solid Surface, großformatige Verkleidungen, ein eingebauter Grill und Stauraum, wetterfeste Tischlerei — alles darauf ausgelegt, an der Costa Blanca das ganze Jahr draußen zu leben.",
  },
};

const matDesc = {
  en: {
    "oak-wood": "A warm, large-format wood-look board in Magic Flexible Stone — the natural grain of timber with the durability and easy maintenance of stone, ready for floors, walls and façades by the sea.",
    "dark-wood": "A deep, bush-hammered finish in rich dark tones — built for statement walls and luxurious settings, with the texture of weathered timber and the resilience of flexible stone.",
    "concrete": "A composite of cement, aggregate and water, prized for its strength, durability and versatility — a calm beige concrete board for floors, walls and façades that ages beautifully.",
    "stone": "Our flexible natural-stone family: large, light panels with the look and feel of real stone, in a palette of beiges and greys — for floors, feature walls and exteriors.",
    "sandstone": "A sedimentary rockface look, mostly sand-sized mineral particles, offering natural durability and a richly textured surface — ideal for architectural panels and façades.",
    "concrete-stone": "A poly-wood board in soft yellow tones — the warmth of wood and the body of stone, for hard-wearing floors and wall claddings indoors and out.",
    "solid-surface-stone": "A non-porous solid-surface stone — seamless, repairable and warm to the touch — used for bathtubs, basins and bespoke bathroom pieces.",
  },
  nl: {
    "oak-wood": "Een warm, grootformaat hout-look paneel in Magic Flexible Stone — de natuurlijke houtnerf met de duurzaamheid en het lage onderhoud van steen, klaar voor vloeren, wanden en gevels aan zee.",
    "dark-wood": "Een diepe, gebouchardeerde afwerking in rijke donkere tinten — gemaakt voor statement-wanden en luxueuze locaties, met de textuur van verweerd hout en de veerkracht van flexibele steen.",
    "concrete": "Een composiet van cement, aggregaat en water, geliefd om kracht, duurzaamheid en veelzijdigheid — een rustig beige betonpaneel voor vloeren, wanden en gevels dat mooi veroudert.",
    "stone": "Onze familie flexibele natuursteen: grote, lichte panelen met de look en feel van echte steen, in een palet van beiges en grijzen — voor vloeren, accentwanden en buitentoepassingen.",
    "sandstone": "Een sedimentaire rotswand-look, voornamelijk zandkorrelige mineraaldeeltjes, met natuurlijke duurzaamheid en een rijk getextureerd oppervlak — ideaal voor architectonische panelen en gevels.",
    "concrete-stone": "Een poly-wood paneel in zachte gele tinten — de warmte van hout en het lichaam van steen, voor slijtvaste vloeren en wandbekledingen binnen en buiten.",
    "solid-surface-stone": "Een niet-poreuze solid-surface steen — naadloos, herstelbaar en warm bij aanraking — gebruikt voor baden, wastafels en maatwerk badkamerstukken.",
  },
  es: {
    "oak-wood": "Un panel cálido de gran formato en aspecto madera, en Magic Flexible Stone — la veta natural de la madera con la durabilidad y el mantenimiento fácil de la piedra, listo para suelos, paredes y fachadas junto al mar.",
    "dark-wood": "Un acabado abujardado profundo en tonos oscuros y ricos — pensado para paredes protagonistas y entornos lujosos, con la textura de la madera envejecida y la resistencia de la piedra flexible.",
    "concrete": "Un composite de cemento, árido y agua, apreciado por su resistencia, durabilidad y versatilidad — un panel de hormigón beige sereno para suelos, paredes y fachadas que envejece muy bien.",
    "stone": "Nuestra familia de piedra natural flexible: paneles grandes y ligeros con el aspecto y el tacto de la piedra real, en una paleta de beiges y grises — para suelos, paredes protagonistas y exteriores.",
    "sandstone": "Un aspecto de roca sedimentaria, principalmente partículas minerales de tamaño arena, con durabilidad natural y una superficie de textura rica — ideal para paneles arquitectónicos y fachadas.",
    "concrete-stone": "Un panel poly-wood en suaves tonos amarillos — la calidez de la madera y el cuerpo de la piedra, para suelos resistentes y revestimientos de pared dentro y fuera.",
    "solid-surface-stone": "Una piedra solid surface no porosa — sin juntas, reparable y cálida al tacto — usada para bañeras, lavabos y piezas de baño a medida.",
  },
  de: {
    "oak-wood": "Eine warme, großformatige Platte in Holzoptik aus Magic Flexible Stone — die natürliche Holzmaserung mit der Haltbarkeit und der pflegeleichten Art von Stein, bereit für Böden, Wände und Fassaden am Meer.",
    "dark-wood": "Eine tiefe, gestockte Oberfläche in satten dunklen Tönen — gemacht für Statement-Wände und luxuriöse Settings, mit der Textur von verwittertem Holz und der Widerstandsfähigkeit von flexiblem Stein.",
    "concrete": "Ein Verbund aus Zement, Zuschlag und Wasser, geschätzt für Festigkeit, Haltbarkeit und Vielseitigkeit — eine ruhige beige Betonplatte für Böden, Wände und Fassaden, die schön altert.",
    "stone": "Unsere flexible Naturstein-Familie: große, leichte Platten mit der Optik und Haptik von echtem Stein, in einer Palette aus Beige- und Grautönen — für Böden, Akzentwände und Außenbereiche.",
    "sandstone": "Eine sedimentäre Felsoptik, überwiegend sandkorngroße Mineralpartikel, mit natürlicher Haltbarkeit und reich strukturierter Oberfläche — ideal für Architekturpaneele und Fassaden.",
    "concrete-stone": "Eine Poly-Wood-Platte in sanften Gelbtönen — die Wärme von Holz und der Körper von Stein, für strapazierfähige Böden und Wandverkleidungen innen und außen.",
    "solid-surface-stone": "Ein nicht poröser Solid-Surface-Stein — fugenlos, reparierbar und warm im Griff — verwendet für Badewannen, Waschbecken und maßgefertigte Badelemente.",
  },
};

const projExtra = {
  en: { style: "Style", duration: "Duration", days: "days" },
  nl: { style: "Stijl", duration: "Duur", days: "dagen" },
  es: { style: "Estilo", duration: "Duración", days: "días" },
  de: { style: "Stil", duration: "Dauer", days: "Tage" },
};

const WALL_PANELS = "Magic Flexible Stone";

for (const L of ["en", "nl", "es", "de"]) {
  const f = `messages/${L}.json`;
  const j = JSON.parse(fs.readFileSync(f, "utf8"));
  j.spaces.names = spaceNames[L];
  j.spaces.descriptions = spaceDesc[L];
  j.materials.descriptions = matDesc[L];
  j.products.collectionWallPanels = WALL_PANELS;
  j.projects.style = projExtra[L].style;
  j.projects.duration = projExtra[L].duration;
  j.projects.days = projExtra[L].days;
  fs.writeFileSync(f, JSON.stringify(j, null, 2) + "\n");
  console.log(L, "patched");
}
