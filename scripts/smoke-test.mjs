import { existsSync, readFileSync } from "node:fs";

const requiredFiles = [
  "DESIGN.md",
  "README.md",
  "docs/SOURCE_OF_TRUTH.md",
  "docs/PROJECT_STATUS.md",
  "docs/VISUAL_REFERENCES.md",
  "src/app/page.tsx",
  "src/app/globals.css",
  "src/components/Header.tsx",
  "src/components/Hero.tsx",
  "src/components/StoryChapters.tsx",
  "src/components/FoodShowcase.tsx",
  "src/components/ServiceTiles.tsx",
  "src/components/ReservationCTA.tsx",
];

const missing = requiredFiles.filter((file) => !existsSync(file));

if (missing.length > 0) {
  console.error("Arquivos obrigatorios ausentes:");
  for (const file of missing) console.error(`- ${file}`);
  process.exit(1);
}

const design = readFileSync("DESIGN.md", "utf8");
const page = readFileSync("src/app/page.tsx", "utf8");

for (const token of ["colors:", "typography:", "components:", "A Varanda"]) {
  if (!design.includes(token)) {
    console.error(`DESIGN.md nao contem token esperado: ${token}`);
    process.exit(1);
  }
}

for (const component of ["Header", "Hero", "StoryChapters", "FoodShowcase", "ServiceTiles"]) {
  if (!page.includes(component)) {
    console.error(`Pagina inicial nao referencia componente: ${component}`);
    process.exit(1);
  }
}

console.log("Smoke test OK: estrutura, documentacao e pagina inicial estao presentes.");

