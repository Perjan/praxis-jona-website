**Design QA: Responsive homepage hero redesign**

- Source visual truth: `/Users/perjanduro/.codex/generated_images/019efdf6-0947-7d31-b593-17459d9cc1cc/exec-4f89d678-0403-491b-8516-55ff5d49c76c.png`
- Desktop hierarchy refinement: `/Users/perjanduro/.codex/generated_images/019efdf6-0947-7d31-b593-17459d9cc1cc/exec-77eedaa0-482a-4bb4-bc26-e36d78191c84.png`
- Source dimensions: 1920 x 1080 px.
- Browser implementation screenshots include the final responsive set at `tmp/home-redesign/final-mobile-390.png`, `tmp/home-redesign/final-tablet-768.png`, `tmp/home-redesign/final-tablet-1024.png`, `tmp/home-redesign/final-laptop-1279.png`, `tmp/home-redesign/final-desktop-1280.png`, and `tmp/home-redesign/final-qhd-2560.png`.
- Full-view comparison: `tmp/home-redesign/desktop-comparison.png`.
- Viewports: 390 x 844, 430 x 932, 768 x 1024, 1024 x 768, 1279 x 900, 1280 x 900, 1440 x 900, 1920 x 1080, and 2560 x 1440 CSS px at device pixel ratio 1.
- State: German homepage hero; English mobile copy and locale also verified.

**Findings**

- No remaining P0, P1, or P2 issues.
- Fonts and typography: the desktop serif headline retains the approved one-line hierarchy; supporting copy stays readable and wraps without clipping. Mobile uses an appropriately reduced type scale without viewport-scaled text.
- Motion: headline, supporting copy, CTA, and service navigation reveal with a subtle staggered 720ms fade-and-rise. Reduced-motion users receive the settled state without animation.
- Spacing and layout rhythm: the desktop hero fills the first viewport and the service rail spans the frame. Tablet retains a horizontal rail; mobile uses a stable vertical list with no horizontal overflow.
- Colors and visual tokens: forest green, white, and warm ivory match the approved direction. A uniform translucent shade preserves photograph detail while meeting text contrast needs.
- Image quality and asset fidelity: dedicated 2400 x 1350 and 1200 x 1500 WebP assets preserve the approved room, closed-right door, taller walls, slim ornate ceiling, ring lights, flowers, clean wall, couch, and furniture. No UI text is baked into the assets.
- Copy and content: existing German and English homepage copy is unchanged. Service labels and routes are localized and functional.

**Comparison History**

- Initial P1: the 1600px content constraint wrapped the desktop title and narrowed the service rail. Fix: removed the inner-width cap and tuned the display size.
- Initial P2: the large-screen hero height cap exposed the next section before the viewport edge. Fix: removed the cap so the hero fills the available viewport.
- Initial P2: the old translucent homepage header and generous padding differed from the approved solid compact header. Fix: added homepage-only solid white treatment, compact spacing, and wider alignment.
- Post-fix evidence: `tmp/home-redesign/desktop-final-v2.png`, `tmp/home-redesign/tablet-final.png`, and `tmp/home-redesign/mobile-final.png`.
- User refinement: changed the room and shade layers to `position: fixed` beneath the sticky header, and placed subsequent homepage sections on an opaque foreground surface.
- Large-screen hierarchy refinement: moved the high-contrast doorway into the right third, reduced its prominence, and widened the headline area so the copy becomes the first focal point on 27-inch displays.
- Wide-desktop copy refinement: centered the copy across the full viewport at 1280px and above. Tablet and mobile alignment remains unchanged.
- Responsive audit refinement: removed the 1280px alignment jump, centered copy continuously from tablet upward, made the media layer fill the available viewport at every ratio, and moved the full navigation breakpoint to 1280px to prevent laptop-width crowding.
- Phone asset refinement: replaced the portrait-specific source with the desktop hero asset and presents the full 16:9 frame above a centered dark-green copy surface at widths below 768px. Verified at 320px, 375px, 390px, 430px, and 767px in German and English.
- Layer-stack refinement: isolated both homepage variants into an explicit stacking context with the fixed hero image at `0`, shade at `1`, hero UI at `2`, and opaque content/footer layers scrolling above. Verified at 1440 x 900 and 390 x 844 through initial, mid-scroll, and footer states.
- Fixed-scroll evidence: after scrolling 520px, the image remains pinned at 68px while hero UI moves with the document and the quote section covers the image (`tmp/home-redesign/fixed-scroll.png`, `tmp/home-redesign/fixed-mobile-scroll.png`).

**Focused Region Evidence**

- The full first viewport is the focused region because the hero, header, copy, CTA, crop, and service navigation are all visible and readable at the normalized desktop comparison size.

**Interactions And Runtime**

- Mobile navigation opens and closes successfully.
- Hero booking CTA remains an external Doctolib link.
- All three service links point to the existing localized routes.
- English homepage renders `lang="en"`, localized labels, and zero horizontal overflow.
- Browser console checked: no errors.
- Fixed desktop and mobile image position verified before and after scrolling.
- Entry animation verified from opacity 0 to opacity 1 with settled transform.

**Implementation Checklist**

- [x] Use clean responsive room assets without baked-in UI.
- [x] Implement approved desktop hero and integrated service rail.
- [x] Implement tablet and mobile responsive compositions.
- [x] Preserve German and English copy and routes.
- [x] Verify navigation, CTA, overflow, and console state.

**Follow-up Polish**

- P3: a future branded font could replace the system serif if a licensed typeface is selected.

final result: passed
