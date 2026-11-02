---
name: blog-hero-illustration
description: Generate and optimize Praxis Jona blog hero illustrations in the clinic's visual identity. Use for new or revised blog cover imagery and style explorations.
---

# Blog hero illustration

Create article-specific, respectful editorial images. Read the article and current site design before choosing a subject. Confirm the intended use and ask about missing subject, intent, visual references, details to preserve, and style when they cannot be inferred. If the user asks for style options, offer distinct directions. Preserve supplied references and avoid invented text, unsupported medical claims, misleading clinical details, or implied cures.

The owner selected textured gouache as the preferred editorial direction on 2026-11-02. Use matte pigment, visible brushwork and paper texture with the clinic palette, unless the user requests another style. Vary subject and composition across articles. When people appear, reflect the article’s audience: include male and female models across images for subjects relevant to both, and male models for predominantly male topics. For iron deficiency and iron-treatment articles, prefer women as the main subjects, following the owner’s 2026-11-02 editorial direction. Do not imply that iron deficiency affects only women. Use women where the article specifically concerns women. If a doctor appears, depict a brunette woman as a fictional clinician; do not depict or imply that she is Dr. Jonida Gjolli.

Use the available image-generation tool to create each requested variant separately. Describe the subject, composition, medium, mood, and constraints. Do not include text, logos, or identifiable people unless requested. When medical content is involved, use a thoughtful metaphor that does not present a subjective experience as a diagnosis. Follow explicit user choices over these defaults.

Read `tailwind.config.*` for the current brand palette. At creation, its clinic colors are forest green `#0D322B`, dark green `#081F1A`, light sage `#D3E0D6`, warm ivory `#F9EDDF`, and beige `#CAAB8C`. Use current repository values if they change. Blog listings use 16:9 crops and article covers render at 1368×760; compose for both and keep essential content clear of edges.

Save requested variants under `public/images/blog-images/` using descriptive, unique names. Optimize as WebP or JPEG with the project's `sharp` dependency. Preserve aspect ratio, choose a reasonable quality, and check pixel dimensions, file size, and visible output. Do not overwrite existing assets without an explicit request. Keep variants as standalone files until the user selects one; do not change article metadata or publish automatically.

When a generated image is selected for use on the site, provide meaningful localized alt text and set `coverImageIsAiGenerated: true` in the appropriate article front matter. Follow `.agents/skills/image-disclosure-editor/SKILL.md` for the existing visible disclosure and all reuse. Do not infer or change clinical review dates. Verify the selected cover on article and listing layouts in both relevant languages, including mobile. Report the saved paths, image-generation method, and prompts used.

For a requested batch, use the approved gouache direction for each article and for each free tool’s 1200 × 630 Open Graph image. Share one article illustration across its German and English versions. Avoid image text and use localized metadata for each tool.
