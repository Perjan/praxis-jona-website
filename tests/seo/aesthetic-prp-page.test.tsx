import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { AestheticMarkdownPage, getAestheticFaqSchema } from "@/app/components/AestheticMarkdownPage";

describe("German PRP treatment hub", () => {
  it("renders the hero lead only once in the HTML", () => {
    const html = renderToStaticMarkup(
      <AestheticMarkdownPage sectionKey="prp" canonical="/aesthetik/prp-behandlung" />,
    ).replace(/<script[\s\S]*?<\/script>/g, "");
    const lead = "Regenerative Hautbehandlungen für Hautqualität, Kollagenaufbau und natürliche Ergebnisse";

    expect(html.split(lead)).toHaveLength(2);
  });

  it("builds FAQ structured data from the visible PRP questions and answers", () => {
    const schema = getAestheticFaqSchema("prp");

    expect(schema?.mainEntity).toHaveLength(12);
    expect(schema?.mainEntity).toContainEqual({
      "@type": "Question",
      name: "Wie lange dauert eine PRP- oder Vampire-Lifting-Behandlung?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Die Behandlung dauert in der Regel etwa 45 bis 60 Minuten, abhängig von Behandlungsregion und Behandlungskonzept.",
      },
    });
  });
});
