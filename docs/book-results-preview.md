# Book and Results pages

**Current shopping flow:** Book now uses a compact Add to cart selector; cart editing lives at `/cart`, address/payment layout at `/checkout`. All 17 languages and free USPS First Class shipping are included. See [cart and checkout](cart-checkout.md) for the current behavior. The order-form descriptions below document earlier layout iterations.

## Direction

Continue the existing CBCM visual design: Cormorant Garamond headlines, Plus Jakarta Sans text, restrained teal/navy, pale backgrounds, generous spacing, original waterfall branding, and supplied book art. The homepage and unified Contact layout are retained.

The user clarified that orders must go through Central Ohio directly, rather than Bridge Publications. The Book page has no publisher purchase link. This is an order/checkout layout preview, not an emailed order inquiry.

## Review

- Book: [desktop](previews/book-desktop.jpg) / [mobile](previews/book-mobile.jpg)
- Results: [desktop](previews/results-desktop.jpg) / [mobile](previews/results-mobile.jpg)

## Book page

Product hero, book/discoveries blurbs, two text-only testimonial excerpts, and direct-order form. Uses supplied product artwork, not a generated approximation. Discovery headings are editorial summaries, not a table of contents or invented chapter titles. There is no program-page detour from the Book content.

Order selections: paperback/hardcover, quantity (1–99), language, name/email, optional phone, pickup/shipping, address (shipping by default, billing for pickup), and optional notes. The visitor can review and edit their selections. The review accurately describes the selected delivery method and preserves fields when editing.

The user requested a finished-looking checkout with no setup notices on the page. The hero says “Order your copy now”; the redundant local availability/setup note is removed. Payment entry point is styled as an active button. There is no live payment processor, order creation, confirmation email, or fulfillment automation. Clicking Continue to payment currently displays an honest integration-unavailable message and cannot create a false paid confirmation. No order data leaves the browser or is persisted. With JavaScript disabled, a phone fallback replaces the interactive form rather than submitting personal details in the URL. The real checkout adapter must replace that fallback before launch.

### Later integration

- Confirm edition/language inventory, prices, pickup and shipping policies.
- Select/configure the organization's payment account and checkout integration.
- Calculate prices, delivery charges, and applicable taxes on the server.
- Create and fulfill orders from verified successful payments, with duplicate protection.
- Add receipt/notification delivery and a genuine confirmation screen.
- Test payment success, cancellation, failure, and fulfillment before launch.

## Results page

**Current Results layout:** the later [Results redesign](results-redesign.md) replaces the featured navy block, category filters, and source labels described below with alternating photo/story sections. Quote text and attributions remain unchanged.

Waterfall header, featured account, six short attributed excerpts, topic filters, and links to the Book and Contact pages. Original headings and complete long accounts are not reproduced wholesale. Excerpt wording and initials are preserved; new card titles are editorial navigation labels. These are reference-site accounts, not local testimonials, and no generated people are used to represent contributors. Existing homepage portraits and text are unchanged.

Topics follow the reference: More energy, Wellness, Stress relief, Mental clarity. Filtering works with pressed button states and an announced story count. All six accounts are server-rendered and readable without JavaScript.

## Sources

Reviewed November 8, 2026:

- https://clearbodyclearmind.com/shop/book — book presentation, author/subtitle, introductory description, edition/language/quantity selection pattern. Existing user-supplied homepage book description is reused; supporting summaries stay neutral. The latest draft uses reference-site display prices ($20 paperback / $30 hardcover), which must be confirmed for local ordering. Subtotal updates with the selected quantity and format; shipping/tax are calculated at payment. Free-shipping promotions, free-gift offers, and publisher cart integration are not carried over. Two exact short testimonial excerpts from Robbie S and Alicia K, Actress are included without photos and were matched to this source.
- https://clearbodyclearmind.com/results — topic structure and six exact short excerpts from accounts attributed to E.E., E.C., T.F, K.K., J.G., S.M. Whitespace-normalized checks matched every excerpt to the retrieved source. The numeric reach claim and medical endorsements are not introduced.

The original pages informed content and organization; their scripts, analytics, cart, and styles are not copied.

## Verification

Production build, ESLint, TypeScript, and diff checks passed. Chromium verified required and whitespace validation, shipping-address requirements, order review/edit with retained values, switching to pickup, payment-unavailable fallback/no submission, topic filtering, loaded images, and no horizontal overflow at 1440px and 390px. JavaScript-disabled fallback behavior was checked on both pages. Browser captured no page errors and no POST requests; no orders or payments were sent.

## Latest Book refinement

Address fields are visible by default (shipping selected) and retained as billing fields for pickup. Removed preview/setup banners from the product and order presentation. No card fields collect sensitive payment information; checkout will hand off to the selected processor once configured. Book blurbs also draw on the reference overview page for its discussion of Hubbard’s research and the exercise/sauna/nutrition regimen. These claims are attributed to the book rather than strengthened.

## Purchase-first composition

The Book page now starts with a single product/checkout composition: title, original book render over waterfall artwork, and product introduction on the left; the order form starts alongside it on the right at desktop widths. Mobile stacks product then form, with an order anchor to skip directly to the form. Below this come the book/discoveries section and then testimonials, with a return-to-order button. The discovery section includes a locally served open-book photograph and restrained line glyphs in dimensional cards. Testimonials use framed quote cards without invented portraits.

New source asset: `public/images/book/open-book.jpg`, from https://clearbodyclearmind.com/img/common/cbcm-book-open.jpg (645 × 314), retrieved November 8, 2026. Used as actual book photography in the design draft, not a generated replacement.
