# Results page redesign

The large navy featured-quote block has been removed. The waterfall PageHero now fades into the same light background as the stories section, eliminating the light-to-navy jump immediately below the hero.

All six original short quotes and attributions remain unchanged. Topic filters, category labels, story count, and repeated source labels/links are removed from the visible page. Source provenance remains in `content/results.ts` and the project documentation.

Three alternating photographic sections pair each image with two accounts, using editorial spacing and a quiet dividing line. This is visual composition, not topic classification. The page is server-rendered and all accounts remain readable without JavaScript.

## Temporary photography

Three images were generated with OpenAI image generation, November 8, 2026, as fictional everyday-life illustrations:

- `public/images/placeholders/results-morning.webp`: woman in a bright home, source PNG `exec-572c536f-2027-4165-aadc-03a6e586b973.png`.
- `public/images/placeholders/results-outdoors.webp`: man on a leafy park path, source PNG `exec-42172b03-623e-45d1-8ace-cd08da366ee6.png`.
- `public/images/placeholders/results-sunlight.webp`: woman on a sunlit porch, source PNG `exec-aebe7c82-803c-4e77-98e0-63c2aec8ccf6.png`.

Each prompt requested natural, realistic lifestyle editorial photography with no text, branding, medical context, or before/after framing. Optimized site versions are 1400px WebP. Original generated PNGs remain in the session's generated_images directory.

One visible page note and descriptive alt text make clear these are illustrative photos, not the quoted contributors. When local success stories and photos arrive, replace the relevant image entries in `components/results/StoryCollection.tsx`, update the exact quote/attribution in `content/results.ts`, and revise the temporary-illustration note only when appropriate.

## Review

[Desktop](previews/results-desktop.jpg) · [Mobile](previews/results-mobile.jpg)

Validation: ESLint, TypeScript, production build, and diff checks. Chromium verified six visible stories, no category controls or source labels, three loaded story images, no horizontal overflow or page errors at desktop/mobile widths, and accounts still visible without JavaScript.
