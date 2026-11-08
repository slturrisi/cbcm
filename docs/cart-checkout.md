# Cart and checkout

## Current flow

`/book` → compact edition/language/quantity selector → Add to cart → `/cart` → `/checkout`.

The header has a cart icon with the total copy count on desktop and mobile. Cart line items are keyed by format + language: matching selections merge; different editions/languages remain separate. Quantities (1–99 per variant), language edits (including merging), removal, empty states, and subtotal calculations are implemented.

The cart is saved under `cbcm-cart-v1` in localStorage, validated when read, and synchronized across tabs. Only catalog format/language/quantity are saved. If browser storage is unavailable, the current tab falls back to in-memory cart state (not reload persistence). No contact, address, or card information is stored there. Corrupt or noncatalog entries are discarded. Persisted prices are ignored; display totals use the local catalog.

## Catalog and shipping

Languages transcribed from the user's screenshot: Chinese Traditional, Danish, Dutch, English, French, German, Greek, Hebrew, Hungarian, Italian, Japanese, Norwegian, Portuguese, Russian, Spanish (Castillian), Spanish (Latin American), Swedish. The labels match the screenshot. All 17 appear in the Book selector and editable Cart items.

Paperback $20 and Hardcover $30 remain reference display prices pending confirmation for local ordering. User explicitly confirmed free USPS First Class shipping; it appears in the Book purchase box, Cart summary, and Checkout shipping method with a zero shipping charge. No overnight option, delivery-date promise, gift guide, or supported payment-brand claim has been copied from the reference screenshot. The estimated total is subtotal + free shipping; any applicable tax is determined when real payment is connected.

## Checkout

Includes contact email/phone; shipping country, first/last name, street, optional apartment, city, state/region, postal code; free shipping selection; same-as-shipping billing checkbox with separate billing address when unchecked; order summary; and payment presentation. Address fields validate required values and whitespace, and email uses native validation. US/Ohio are editable defaults, not destination restrictions.

Payment fields are read-only presentation placeholders with no names for submission. They cannot collect card data. Place order currently reports that payment is not connected and that no order/payment was submitted, while keeping the cart. No order creation, backend transmission, or paid confirmation occurs. Replace the visual placeholder with processor-hosted secure fields/checkout and authoritative server-side prices/tax/fulfillment before launch. Decide supported payment methods, legal policies, and shipping destinations as part of that integration.

## Previews

- Book: [desktop](previews/book-desktop.jpg) · [mobile](previews/book-mobile.jpg)
- Cart: [desktop](previews/cart-desktop.jpg) · [mobile](previews/cart-mobile.jpg)
- Checkout: [desktop](previews/checkout-desktop.jpg) · [mobile](previews/checkout-mobile.jpg)

## Validation

Run cart logic checks using Node 22.18+ or Node 24: `node --test tests/cart.test.mjs`.

Five unit tests cover the catalog, merge/separation, language changes, quantity limits, untrusted persisted data, and catalog-priced totals.

Production build, ESLint, and TypeScript pass. Chromium verified multiple languages/formats, matching-line merges, quantity/language edits, removal, totals/free shipping, reload and cross-tab synchronization, shipping/billing validation, read-only payment fields, no personal data in cart storage, empty and corrupt cart states, and no-JavaScript fallback. Screenshots checked at 1440px and 390px; additional overflow checks at 640/768/1024/1280px. No page errors or order/payment submissions occurred.
