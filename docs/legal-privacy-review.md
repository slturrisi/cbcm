# Legal and privacy review — Central Ohio CBCM site

Prepared for the organization's legal/privacy reviewers. These pages consolidate existing legal text and add a factual description of current site functions; they are not a claim of legal compliance or an independent confirmation of organizational practices.

## Public pages and navigation

- `/legal`: website operator/contact, medical disclaimer, copyright and trademarks. Existing medical and copyright paragraphs are carried forward, with an added explanation that questionnaire scores are not diagnoses and personal experiences do not guarantee outcomes.
- `/privacy`: local operator, contact/test/cart/technical data, purposes, providers, browser storage, retention/security, requests and changes.
- `/copyright` permanently redirects to `/legal#copyright`.
- `/medical-disclaimer` permanently redirects to `/legal#medical-disclaimer`.
- Footer links are Legal & Disclaimers and Privacy Policy. Small privacy links are added to the contact form and Toxic Test card. Results links directly to the combined medical section.

## Verified implementation facts

- Contact form sends name, email, optional phone, selected interests and message through FormSubmit to columbus@scientology.net. No submission was sent during review.
- The current Toxic Test has required name/email and optional phone, address and exposure questions. Questions remain editable through Forms; recheck this notice if fields/required settings change.
- Answers save in `questionnaire_responses` as visitors Continue, including incomplete drafts. Records include status/timestamps and submitted scores. The existing Forms/Supabase system remains authoritative.
- The native test's HttpOnly cookie holds draft ID, resume token and cursor, expires after seven days from its latest update, and is cleared on submission/reset. This does not delete database rows. Answers are not kept in cart storage or query URLs.
- The cart's localStorage contains edition/language/quantity. It has no expiry implemented. Checkout remains unconnected and does not create orders, charge cards or transmit entered checkout details.
- Vercel hosts both apps; Supabase hosts questionnaire data; FormSubmit handles contact delivery. Email copies are handled by the organization's email service. No Google Analytics or ad pixel integration was found in this repo; provider/dashboard behavior and other domains require separate confirmation.
- The supplied reference privacy notice is for Bridge Publications and says last amended April 2015. Its company identity, Google Analytics statements and affiliate-sharing practices were not copied as local facts.

## Organizational/legal confirmation needed

1. Exact legal operator name, address and privacy contact; assign staff who monitor and answer privacy requests.
2. Actual retention schedules for incomplete/submitted test responses, email, provider logs and backups; deletion/correction/access procedures, verification and applicable response periods. Seven-day cookie expiry is not database retention.
3. Actual access, sharing, affiliate transfers, follow-up/marketing practices and any needed consent or channel-specific opt-outs. The draft does not grant blanket marketing consent or promise that information is never shared/sold.
4. Handling of drug-use/health-related answers, minors, intended audience and any additional notices/consent required by applicable jurisdictions.
5. Provider terms, processing locations, security/access settings, email provider, and any dashboard-enabled tracking not represented in source code. The FormSubmit site blocked automated browsing during this review; confirm its current terms directly. Supabase and Vercel privacy-policy links responded successfully.
6. Existing copyright/trademark wording, permissions acknowledgments, photograph copyright years, book/article reproduction and local image/testimonial releases. These statements were carried forward from the existing site, not independently verified. Review whether additional disclosure is needed for illustrative AI portraits accompanying real accounts.
7. Medical disclaimer wording and how it relates to program descriptions, testimonials and questionnaire results.
8. Before activating Square or another processor: revise privacy for the actual payment/order flow, confirm taxes/shipping/refunds/returns and notification/fulfillment practices, and publish purchase terms as appropriate. Payments remain inactive.

No retention automation, consent tracking, analytics integration, cookie banner, payment processing or new data sharing is introduced by this change. Public statements should be adjusted to confirmed practices after review.
