import fs from "fs";
import path from "path";

// Walk app/ and components/ for .tsx files
function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith(".tsx")) out.push(p);
  }
  return out;
}

const files = [...walk("app"), ...walk("components")];
let changed = 0;

for (const f of files) {
  const src = fs.readFileSync(f, "utf8");
  // match className="..." (and class="...") string-literal values
  const out = src.replace(/className="([^"]*)"/g, (full, classes) => {
    const tokens = classes.split(/\s+/).filter(Boolean);
    const hasGridDisplay = tokens.includes("grid");
    if (!hasGridDisplay) return full;
    // a "base" grid-cols-N has no `breakpoint:` prefix
    const hasBaseCols = tokens.some((t) => /^grid-cols-/.test(t));
    // only relevant if the element actually becomes multi-column somewhere, OR is a bare `grid`
    const becomesMultiCol = tokens.some((t) => /(^|:)grid-cols-(\[|[2-9])/.test(t)) || !tokens.some((t) => /grid-cols-/.test(t));
    if (hasBaseCols || !becomesMultiCol) return full;
    // insert grid-cols-1 right after the `grid` token
    const i = tokens.indexOf("grid");
    tokens.splice(i + 1, 0, "grid-cols-1");
    return `className="${tokens.join(" ")}"`;
  });
  if (out !== src) {
    fs.writeFileSync(f, out);
    changed++;
    console.log("patched", f);
  }
}
console.log("done — patched", changed, "files");
