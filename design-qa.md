# Inko DTC v2 Design QA

final result: passed

## Source

- Visual reference: `inko-dtc-figma-spec/02-pages/home.png`, `Workflow.png`, `Solutions.png`
- Component reference: `inko-dtc-figma-spec/03-components`
- Production assets: `inko-dtc-figma-spec/04-assets`

## Checks

- Desktop pages `/`, `/workflow`, `/solution` render at 1920px and use shared DTC components instead of full-page screenshots.
- Home hero supports three accessible tab states: Summary, CRM Lite, and Advise. Default Summary, click switching, keyboard ArrowLeft/ArrowRight, and visual left/right ordering were verified.
- Summary hero panel supports the internal `button -> generated analysis -> Back` state. The analysis panel verifies at 750x500 on desktop, uses the requested padding model, scrolls vertically, clips horizontal overflow, and updates the hero stage height.
- Summary analysis typography verifies at `24px/normal` for headings and `18px/normal` for body/list text; Home hero helper verifies at `20px/normal` with regular weight.
- CRM Lite date verifies at `40px`, current progress verifies at `20px`, and the current progress pill touches the filled progress bar with `0px` gap.
- CRM Lite progress verifies with the current pill positioned at `33%` of the gray track, filled progress shortened to `33% + 5px`, and fill/pill gap at `-5px`.
- CRM Lite internal interaction verifies as `Link -> Loading (100ms) -> File`; the client record supports File, Timeline, and Info tabs with a 200ms fade, keyboard navigation, internal vertical scrolling, and a Back control.
- CRM Lite client states retain a `750x500` desktop frame and a `500px`-high responsive frame; at `608px` viewport width the panel measures `576px` wide with no page-level horizontal overflow.
- CRM Lite File, Timeline, and Info content was rebuilt against the updated `Herosection-CRM=*.png` references: File contains five records, Timeline contains two detailed events, and Info contains eight two-column fields. The shared header uses the supplied arrow-left and mail SVG assets.
- CRM Lite's selected `Lite` badge uses the foundation `Blue / Lite Badge` token `#33A6FF`; its inactive state continues to use `Pale Blue / Lite Badge` `#C2D9EB`.
- Advise panel verifies as vertical flow with `16px` padding and a full-width transparent action container aligned bottom-right.
- Advise hero panel refinement verifies with `36px` padding, `36px` radius, and a 20% smaller action icon; CRM Lite tab verifies with `0px` CRM/badge gap.
- Advise's read-only multiline prompt rotates through three supplied examples only while the Advise tab is active. Each example holds for `1000ms`, fades out for `200ms`, waits `100ms`, and fades in for `300ms`; the text viewport remains fixed at the first example's height and clips overflow.
- Advise placeholder animation resets to the first example when the tab is re-entered and changes instantly under `prefers-reduced-motion`, without `aria-live` announcements.
- Workflow page assets were refreshed from `inko-dtc-figma-spec/04-assets`; hero and all six workflow step images verify as loaded `3200x2000` assets on `/workflow`.
- Workflow hero layout verifies as vertical flow with stretched/fill-width copy and media content; h1/body max-width limits are removed for this page only.
- Workflow and Solution hero copy was updated; both hero sections verify as vertical flow with body text capped at `800px` on desktop.
- Solution hero asset was refreshed from `Solutions-hero.png` and verifies as a loaded `3200x2000` asset; More Roles icon uses a dedicated `#FF981A` orange SVG.
- Workflow detail rows verify with shared `20px` bottom padding across all six step components.
- Workflow detail row padding area verifies with page background color while media content remains white.
- Workflow detail desktop scroll interaction uses a single sticky stack stage across all six steps: sticky top starts at the `66px` header height, rows settle at `72px` offsets, later rows have higher z-index, and the final `CRM-sync` state releases the whole stack to scroll into the CTA. At `900px` width the rows verify as static, single-column, non-sticky layout.
- Hero responsive checks passed at 960x840 and 750x840: active tab style follows `aria-selected`, panel height follows current content, mobile tabs remain horizontally scrollable, and no page-level horizontal overflow was detected.
- Header, footer, CTA, waitlist forms, role cards, problem cards, work cards, security cards, workflow rows, and solution detail sections use reusable component classes.
- Tablet/mobile responsive layout stacks sections, collapses navigation, stacks forms, and avoids horizontal overflow.
- Waitlist frontend still submits `{ email }` to `/api/waitlist`.

## Notes

- Cloudflare Function `/api/waitlist` returns 404 under the plain Astro dev server; the function file remains unchanged and is expected to run in the Cloudflare environment.
- Advise panel internal click states remain out of scope until a future interaction spec provides trigger-to-state mappings and state images.
