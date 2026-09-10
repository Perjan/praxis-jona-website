import { Constants } from "app/Constants";

/**
 * A machine-readable recovery block rendered inside the 404 page.
 *
 * AI agents that hit a dead URL otherwise have nothing to go on. Emitting the
 * next hops as plain markdown in the 404 body lets them recover without
 * re-crawling, and it doubles as a useful list for people.
 */
export default function NotFoundAgentGuide({ locale }: { locale: "de" | "en" }) {
  const isDe = locale === "de";

  const links = isDe
    ? [
        ["Startseite", "/"],
        ["Leistungen", "/leistungen"],
        ["Hausärztliche Leistungen", "/hausaerztliche-leistungen"],
        ["Preise", "/preise"],
        ["Kontakt & Anfahrt", "/kontakt"],
        ["Termin buchen", "/termin-buchen"],
        ["Blog", "/blog"],
        ["English version", "/en"],
      ]
    : [
        ["Home", "/en"],
        ["Services", "/en/services"],
        ["General medicine", "/en/general-medicine"],
        ["Prices", "/en/prices"],
        ["Contact & directions", "/en/contact"],
        ["Book an appointment", "/termin-buchen"],
        ["Blog", "/en/blog"],
        ["Deutsche Version", "/"],
      ];

  const markdown = [
    `# 404 — ${isDe ? "Seite nicht gefunden" : "Page not found"}`,
    "",
    isDe
      ? "Diese URL existiert nicht. Die folgenden Seiten sind gültig:"
      : "This URL does not exist. The following pages are valid:",
    "",
    ...links.map(([label, href]) => `- [${label}](${Constants.baseUrl}${href})`),
    "",
    `## ${isDe ? "Maschinenlesbar" : "Machine-readable"}`,
    "",
    `- ${isDe ? "Vollständiger Seitenindex" : "Full page index"}: ${Constants.baseUrl}/sitemap.xml`,
    `- ${isDe ? "Agenten-Anleitung" : "Agent guide"}: ${Constants.baseUrl}/llms.txt`,
    `- robots.txt: ${Constants.baseUrl}/robots.txt`,
  ].join("\n");

  return (
    <section className="mx-auto mt-16 w-full max-w-2xl text-left">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-primaryLighter">
        {isDe ? "Wohin als Nächstes" : "Where to go next"}
      </h2>
      <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-md bg-lightBeige p-4 text-xs leading-6 text-primary">
        {markdown}
      </pre>
    </section>
  );
}
