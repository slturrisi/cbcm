# Connecting real book orders

## Current state

The book selector, browser-persisted cart, language variants and quantity controls already work. The catalog currently displays paperback at $20 and hardcover at $30, each in 17 languages, with free USPS First Class shipping. These are current site settings, not a verified live payment catalog.

Checkout is a prototype: its card fields are read-only, no processor SDK or checkout API exists, and Place order deliberately shows a not-connected message. It creates no order record, takes no payment and sends no order notification. There is no order-management screen, payment webhook, fulfillment/tracking flow or published returns page.

## Recommended implementation

Use the organization’s existing suitable processor if available. Square and PayPal have been identified as existing organization accounts. Evaluate Square for this small single-book catalog: retain the current book/cart experience and use the processor’s secure checkout or payment fields. A separate full storefront platform is not necessary to keep the present site.

1. Confirm the merchant account, payout destination and who manages refunds. Account onboarding and bank details are completed in the payment provider’s dashboard, not in chat.
2. Confirm the $20 selling price, availability of the 17 language editions, quantity limits, shipping destinations and actual mailing service, applicable tax handling and the return/refund policy.
3. Add a server checkout endpoint that accepts only language/format/quantity identifiers and validates them against an authoritative catalog. Recompute prices and shipping on the server; browser totals never determine charges. Create a provider checkout session/payment using test credentials first.
4. Connect secure payment collection, required shipping/contact details, cancellation/retry and a confirmation page. Never store or log card numbers/CVC in the site or its database.
5. Add durable orders and verified, idempotent payment webhooks. Mark an order paid only from the provider-confirmed payment state; revisiting a success URL must not count as payment. Handle duplicate/delayed events and refunds.
6. Give staff paid-order notifications and an authenticated way to see the language, quantity, shipping address and fulfillment status. Decide whether labels/tracking are managed manually at launch or integrated later. A notification failure must not lose the saved order.
7. Test the full journey in provider test mode: different languages and quantities, altered browser totals, declined/canceled payments, duplicate webhook delivery, confirmations and refund/fulfillment actions. Check tax/shipping totals and mobile checkout.
8. Configure production secrets in Vercel, register the live webhook and switch to production after the merchant details and order process are confirmed. A designated real purchase/refund requires explicit authorization; no real charge is made during development checks.

## Decisions still needed

- Existing processor/account, or selection of a new one.
- Final price, fulfillment locations, language stock and shipping/tax settings.
- Order-notification recipient and staff access/fulfillment workflow.
- Return/refund terms and confirmation-email sender.

The contact-form copy change is independent of this setup. No payment integration has been activated by this review.
