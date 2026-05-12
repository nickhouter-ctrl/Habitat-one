import fs from "fs";

const patch = {
  en: {
    "projects.intro":
      "A look at the homes we build and renovate in and around Xàbia — from a derelict finca to a brand-new villa. On every project the before and after sit side by side, so you can see the transformation for yourself.",
    "projects.galleryTitle": "The project in pictures",
    "home.projectsText":
      "On every project the before and the after sit side by side — see how a tired house on the Costa Blanca becomes a calm, light-filled Mediterranean home.",
  },
  nl: {
    "projects.intro":
      "Een blik op de huizen die we in en rond Xàbia bouwen en renoveren — van een vervallen finca tot een gloednieuwe villa. Bij elk project staan het 'voor' en het 'na' naast elkaar, zodat je de transformatie zelf kunt zien.",
    "projects.galleryTitle": "Het project in beeld",
    "home.projectsText":
      "Bij elk project staan het 'voor' en het 'na' naast elkaar — zie hoe een gedateerd huis aan de Costa Blanca een rustig, licht mediterraan thuis wordt.",
  },
  es: {
    "projects.intro":
      "Un vistazo a las casas que construimos y reformamos en Xàbia y alrededores — de una finca en ruinas a una villa de obra nueva. En cada proyecto el antes y el después están uno al lado del otro, para que veas la transformación con tus propios ojos.",
    "projects.galleryTitle": "El proyecto en imágenes",
    "home.projectsText":
      "En cada proyecto el antes y el después están uno al lado del otro — mira cómo una casa anticuada de la Costa Blanca se convierte en un hogar mediterráneo sereno y luminoso.",
  },
  de: {
    "projects.intro":
      "Ein Blick auf die Häuser, die wir in und um Xàbia bauen und renovieren — von einer verfallenen Finca bis zur brandneuen Villa. Bei jedem Projekt stehen das Vorher und das Nachher nebeneinander, damit Sie die Verwandlung selbst sehen.",
    "projects.galleryTitle": "Das Projekt in Bildern",
    "home.projectsText":
      "Bei jedem Projekt stehen das Vorher und das Nachher nebeneinander — sehen Sie, wie ein veraltetes Haus an der Costa Blanca zu einem ruhigen, lichtdurchfluteten mediterranen Zuhause wird.",
  },
};

function setDeep(obj, dottedKey, value) {
  const parts = dottedKey.split(".");
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) cur = cur[parts[i]];
  cur[parts[parts.length - 1]] = value;
}

for (const L of ["en", "nl", "es", "de"]) {
  const f = `messages/${L}.json`;
  const j = JSON.parse(fs.readFileSync(f, "utf8"));
  for (const [k, v] of Object.entries(patch[L])) setDeep(j, k, v);
  fs.writeFileSync(f, JSON.stringify(j, null, 2) + "\n");
  console.log(L, "copy patched");
}
