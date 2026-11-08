# Book and Results pages

## Direction

Continue the existing CBCM visual design: Cormorant Garamond headlines, Plus Jakarta Sans text, restrained teal/navy, pale backgrounds, generous spacing, original waterfall branding, and supplied book art. The homepage and unified Contact layout are retained.

The user clarified that orders must go through Central Ohio directly, rather than Bridge Publications. The Book page has no publisher purchase link. This is an order/checkout layout preview, not an emailed order inquiry.

## Review

- Book: [desktop](previews/book-desktop.jpg) / [mobile](previews/book-mobile.jpg)
- Results: [desktop](previews/results-desktop.jpg) / [mobile](previews/results-mobile.jpg)

## Book page

Product hero, concise introduction, three reading themes, and direct-order form. Uses supplied product artwork, not a generated approximation. Reading themes are interface summaries, not a table of contents or invented chapter titles.

Order selections: paperback/hardcover, quantity (1–99), language, name/email, optional phone, pickup/shipping, shipping address when applicable, and optional notes. The visitor can review and edit their selections. The review accurately describes the selected delivery method and preserves fields when editing.

The preview explicitly stops before payment. No price, tax, shipping cost, stock commitment, payment processor, order creation, confirmation email, or fulfillment automation is configured. No order data leaves the browser or is persisted. With JavaScript disabled, a phone fallback replaces the interactive form rather than submitting personal details in the URL. Do not enable a payment button until real ordering is integrated.

### Later integration

- Confirm edition/language inventory, prices, pickup and shipping policies.
- Select/configure the organization's payment account and checkout integration.
- Calculate prices, delivery charges, and applicable taxes on the server.
- Create and fulfill orders from verified successful payments, with duplicate protection.
- Add receipt/notification delivery and a genuine confirmation screen.
- Test payment success, cancellation, failure, and fulfillment before launch.

## Results page

Waterfall header, featured account, six short attributed excerpts, topic filters, and links to the Book and Contact pages. Original headings and complete long accounts are not reproduced wholesale. Excerpt wording and initials are preserved; new card titles are editorial navigation labels. These are reference-site accounts, not local testimonials, and no generated people are used to represent contributors. Existing homepage portraits and text are unchanged.

Topics follow the reference: More energy, Wellness, Stress relief, Mental clarity. Filtering works with pressed button states and an announced story count. All six accounts are server-rendered and readable without JavaScript.

## Sources

Reviewed November 8, 2026:

- https://clearbodyclearmind.com/shop/book — book presentation, author/subtitle, introductory description, edition/language/quantity selection pattern. Existing user-supplied homepage book description is reused; supporting summaries stay neutral. Publisher price, free-shipping promotion, free-gift offer, and cart integration are not carried over.
- https://clearbodyclearmind.com/results — topic structure and six exact short excerpts from accounts attributed to E.E., E.C., T.F, K.K., J.G., S.M. Whitespace-normalized checks matched every excerpt to the retrieved source. The numeric reach claim and medical endorsements are not introduced.

The original pages informed content and organization; their scripts, analytics, cart, and styles are not copied.

## Verification

Production build, ESLint, TypeScript, and diff checks passed. Chromium verified required and whitespace validation, shipping-address requirements, order review/edit with retained values, switching to pickup, disabled payment, topic filtering, loaded images, and no horizontal overflow at 1440px and 390px. JavaScript-disabled fallback behavior was checked on both pages. Browser captured no page errors and no POST requests; no orders or payments were sent.
