# Mobile heroes, branding and next steps

Home, Overview and Results now show the complete 1672:941 waterfall panorama below the header on viewports narrower than 768px, with a fade into a navy text area. The home book remains in document flow. Desktop background heroes retain their existing layout.

The supplied replacement line-art mark is used in the header. Browser/favicon and Apple icon variants use that same mark on a navy background for contrast on light browser chrome.

The overview page ends with Get the Book and Read Success Stories links, targeting /book and /results respectively.

Validation: ESLint, TypeScript and production build; all three heroes checked at 320, 390, 768 and 1440px for image aspect ratio, header clearance, text placement and overflow. Layout browser checks served original local image assets to avoid local optimizer request stalls; the production image component and build remain unchanged. Both end-of-overview destinations and layout checked at 390, 768 and 1440px. Preview images in docs/previews/*-hero-{390,1440}.jpg and program-next-steps-{390,768,1440}.jpg.
