# Results page redesign

The large navy featured-quote block has been removed. The waterfall PageHero now fades into the same light background as the stories section, eliminating the light-to-navy jump immediately below the hero.

All six original short quotes and attributions remain unchanged. Topic filters, category labels, story count, and repeated source labels/links are removed from the visible page. Source provenance remains in `content/results.ts` and the project documentation.

Six alternating rows give each account its own distinct image. Photos are 360px square on large screens, 280px on medium screens, and at most 320px on phones, with text beside them on desktop and below on mobile. This is visual composition, not topic classification. The page is server-rendered and all accounts remain readable without JavaScript.

## Temporary photography

Six images were generated with OpenAI image generation, November 8, 2026, as fictional everyday-life illustrations:

- `public/images/placeholders/results-morning.webp`: woman in a bright home, source PNG `exec-572c536f-2027-4165-aadc-03a6e586b973.png`.
- `public/images/placeholders/results-outdoors.webp`: man on a leafy park path, source PNG `exec-42172b03-623e-45d1-8ace-cd08da366ee6.png`.
- `public/images/placeholders/results-sunlight.webp`: woman on a sunlit porch, source PNG `exec-aebe7c82-803c-4e77-98e0-63c2aec8ccf6.png`.

Each prompt requested natural, realistic lifestyle editorial photography with no text, branding, medical context, or before/after framing. The first three site images are 1400px WebP; the additional three are 1000px WebP. Original generated PNGs remain in the session's generated_images directory.

One visible page note and descriptive alt text make clear these are illustrative photos, not the quoted contributors. When local success stories and photos arrive, replace the relevant image entries in `components/results/StoryCollection.tsx`, update the exact quote/attribution in `content/results.ts`, and revise the temporary-illustration note only when appropriate.

## Review

[Desktop](previews/results-desktop.jpg) · [Mobile](previews/results-mobile.jpg)

Validation: ESLint, TypeScript, production build, and diff checks. Chromium verified six visible stories, no category controls or source labels, six loaded story images, no horizontal overflow or page errors at desktop/mobile widths, and accounts still visible without JavaScript.

## Additional photo sources and shared fade

- `results-window.webp`: man by a bright window, source `exec-665625f6-3905-4603-bf9e-fc8823b78534.png`.
- `results-garden.webp`: woman on a garden terrace, source `exec-3daa6475-9f5c-4c30-8c1e-b3bb01902099.png`.
- `results-terrace.webp`: man on a residential terrace, source `exec-b56a3a1e-d40a-43cd-8b87-619523bd0845.png`.

Generated with the same fictional editorial-lifestyle direction as the first set. These are illustrations rather than contributor identities.

The shared `PageHero` used only by Results and Contact now reserves more space below its copy and fades over 224–256px with multiple opacity stops, replacing the previous 80px fade. Home and Program use their own heroes and are unchanged. Updated Results and Contact screenshots show this transition. Chromium verified six distinct images, dimensions, alternating desktop sides, and responsive layouts on both pages.
