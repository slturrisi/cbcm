# CBCM image inventory

The supplied image files below were synced from the desktop project. Their original provenance and the testimonial text still need user review; do not treat presence in the repository as verification.

| Area | Existing files | Current use / replacement plan |
| --- | --- | --- |
| Branding | `public/logos/cbcm-waterfall.png` | Header and favicon. Keep. |
| Waterfall | `public/images/hero/waterfall-hero.png` | Approved homepage hero and shared page headers. Keep. |
| Book | `public/images/book/clear-body-clear-mind-book.webp`, `.jpg` | Book render on homepage and Book page. Keep original product artwork. |
| Open book | `public/images/book/open-book.jpg` | Book page discovery section. Reference-site image: https://clearbodyclearmind.com/img/common/cbcm-book-open.jpg; retrieved November 8, 2026. |
| Homepage overview | `public/images/hero/biochemical-problem.png` | Existing editorial illustration. Review with user. |
| Program | `public/images/overview/` | Nine existing images covering program topics and waterfall. Review individually before replacement. |
| Testimonials | `public/images/results/success-1.jpg`, `success-2.JPG`, `success-3.JPG` | Existing portraits; preserve. Confirm identity, permission, and exact source wording. Never replace attributed portraits with generated people. |
| Results editorial photos | `public/images/placeholders/results-*.webp` | Six AI lifestyle illustrations, not images of the contributors. Replace with local photos and exact local successes. See `results-redesign.md`. |
| Local facility | `public/images/placeholders/reception-concept.webp` | NEW AI concept image on Contact page. Fictional reception lounge, not the real facility. Replace with a local photo. |

## Local photos to collect

- A wide, bright reception or welcome-area photo (Contact layout currently crops vertically on desktop and horizontally on tablet).
- Exterior/entrance photo for location context, if desired.
- Program spaces, with captions identifying what is actually shown.
- Participant photos paired with approved, exact testimonial text and permission.

## Generated placeholder provenance

`reception-concept.webp` was generated using OpenAI image generation for layout exploration. The original PNG is retained in the session workspace; the website uses a resized 1400px WebP. Prompt: fictional peaceful reception lounge, white plaster, pale oak, tall sunlit windows, cream seating, plant, restrained teal accents; no people, text, branding, or medical equipment. Both visible caption and alt text identify it as a concept rather than the real location.

To replace it, add the real photo under `public/images/contact/` and update `components/contact/LocalContact.tsx` (source, alt text, and concept caption). Do not remove the concept disclosure while the generated image remains.

## Current milestone

Contact page has email, phone, and map links using details already present in the supplied footer. The inquiry form now forwards through FormSubmit to the same inbox as Visit; verify activation and delivery before launch. It does not book appointments. No purchasing or scheduling provider has been selected. Book and Results page layouts are now built; see `book-results-preview.md`. Direct checkout still needs pricing, payment, and fulfillment integration.

## Local Purification In-Charge photo

`public/images/overview/central-ohio-purification-in-charge.webp` replaces the previous `precision.png` in the Program page’s Precision / Key to Success section. Supplied by the user as `Hannah Moi Purif copy.jpg.zip`, containing the original 5568 × 3712 JPEG. Site asset is an 1800px WebP, quality 90; no AI alteration or retouching. Responsive object positioning at 65% keeps the staff member visible in the existing portrait-shaped layout. Original upload remains in session attachments. Section copy is unchanged.

[Precision section desktop preview](previews/program-precision-desktop.jpg) · [Mobile preview](previews/program-precision-mobile.jpg). Build, targeted lint, diff check, and Chromium image-load/position/responsive checks passed.

### Corrected staff photo

The user replaced the previous upload with the retouched `Purif IC.png.zip` / `Purif IC.png` (5568 × 3712). Current site asset: `public/images/overview/central-ohio-purification-in-charge-retouched.webp`, optimized to 1800px WebP quality 90, with no additional retouching. A new URL prevents the old image from remaining in the image cache. Existing layout, alt text and 65% positioning are preserved. The earlier generated site asset is retired.
