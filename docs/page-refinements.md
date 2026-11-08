# Five-page refinement pass

## Home

Restored Get your copy beside Program Overview in the top hero. Removed the separate dark book-promotion panel. Success photos use consistent 4:5 portrait windows and individual focal positions (80% vertical for the first portrait, top for the second, centered for the third) to keep faces visible with waist-up framing. Existing photos, text and attributions are unchanged; hover zoom is removed so the crops stay stable.

## Program / Overview

Replaced the food-spread illustration in Chemicals Can Also Remain in the Body with a new conceptual chemical-exposure editorial image: packaged processed foods/ingredient panels, sealed household products on a separate tray, and an industrial skyline. Source is OpenAI image generation (`exec-e20a0ff1-4edf-456e-a22a-2569374eb9c2.png`), optimized locally to `public/images/overview/chemical-exposure-editorial.webp`. It illustrates exposure sources, not a study or evidence about specific foods/products.

Precision's photo caption is now Specialist Staff, with the user-requested statement that staff are specifically trained in the program and its delivery. The supplied corrected staff photograph is retained.

Fresh Start and Reported Gains are one section with an intro/photo, the four existing gain cards, the unchanged attributed quotation, and the existing disclaimer. The duplicate Renewal/Reported Gains section heading and repeated introduction are removed. The closing book prompt reads exactly “Read about the complete program.”

## Results

Added the header eyebrow line and italic cyan “own words.” A pale blue blurred circle and offset rounded backing panel now sit behind every story photo, matching the Program visual treatment. Six quotes/attributions and image sizes/order remain intact.

## Book

Added the eyebrow line before The book behind the program. Removed the redundant description below the cover and the Personal Experiences section. The page ends after the book-information content. Purchase/cart behavior is unchanged.

## Contact

Removed the waterfall PageHero and its large vertical gap. A compact Questions? / Let’s talk introduction, photo, local address/map/phone and message form now use a top-level two-column layout like Book, stacking on mobile. Photo-area heading is Central Ohio Purification Center. AI concept-image disclosures remain until local facility photography replaces that image. Inquiry submission behavior is unchanged.

## Review and checks

Updated `docs/previews/{home,program,results,book,contact}-{desktop,mobile}.jpg`.

Build, lint, TypeScript and diff checks pass. Chromium verified each requested structural/copy change, consistent home image frames and the middle portrait's top alignment, combined gains content, six Results photos and italic title, Book controls without testimonials, Contact form without a waterfall hero, decoded images, and no horizontal overflow or page errors at 1440px and 390px. No real form submissions, emails, orders or payments were sent.
