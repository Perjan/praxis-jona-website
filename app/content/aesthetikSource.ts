import fs from "fs";
import path from "path";

const sourcePath = path.join(process.cwd(), "app/content/aesthetik-source.md");

export const aestheticSource = fs.readFileSync(sourcePath, "utf8");

export const aestheticSections = {
  hub: "Ästhetik",
  botulinumtoxin: "Botulinumtoxin-Behandlung in Berlin-Mitte",
  prp: "PRP / Eigenbluttherapie & Vampire Lifting in Berlin-Mitte",
  microneedling: "Medizinisches Microneedling mit Dermapen® in Berlin-Mitte",
  hair: "Haartherapie bei Haarausfall in Berlin-Mitte",
  skinbooster: "Skinbooster & regenerative Hauttherapien in Berlin-Mitte",
} as const;

export type AestheticSectionKey = keyof typeof aestheticSections;

export function getAestheticSectionMarkdown(key: AestheticSectionKey) {
  const title = aestheticSections[key];
  const heading = `# ${title}`;
  const start = key === "hub" ? aestheticSource.indexOf(heading) : aestheticSource.indexOf(heading);

  if (start < 0) {
    throw new Error(`Missing aesthetic source section: ${title}`);
  }

  const next = key === "skinbooster" ? -1 : aestheticSource.indexOf("\n# ", start + heading.length);
  return aestheticSource.slice(start, next < 0 ? aestheticSource.length : next).trim();
}

export function getAestheticSectionTitle(key: AestheticSectionKey) {
  return aestheticSections[key];
}

export function getAestheticSectionDescription(key: AestheticSectionKey) {
  const markdown = getAestheticSectionMarkdown(key);
  const lines = markdown
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#") && line !== "⸻" && !line.startsWith("```"));

  const firstText = lines.find((line) => !line.startsWith("- ") && !line.startsWith("* ") && !line.startsWith("✔ "));
  return firstText?.replace(/^\*\*(.*)\*\*$/, "$1") ?? getAestheticSectionTitle(key);
}
