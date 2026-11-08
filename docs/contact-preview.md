# Contact layout preview

This milestone replaces the Contact page's placeholder paragraph with a responsive local-contact section, an AI-generated reception concept, and the shared footer. Address, phone, and email come from the supplied footer. Email opens the visitor's mail app; phone opens the dialer; map opens Google Maps. The inquiry form uses the same FormSubmit email delivery as the Visit website; scheduling is handled by an inquiry, not an appointment-booking service.

The fictional interior is visibly labeled and is intended to be replaced with real facility photography. See [image inventory](image-inventory.md) for filenames, provenance, and the replacement list. The approved homepage hero and substantive program copy are preserved.

Also fixes case-sensitive paths for two existing testimonial photos and the footer telephone target, and escapes an apostrophe to satisfy the existing lint rule without changing rendered copy. The original project handoff is archived in [project-handoff.md](project-handoff.md); its initial-state description predates the desktop code sync.

## Review

- [Desktop](previews/contact-desktop.jpg)
- [Mobile](previews/contact-mobile.jpg)

## Validation

- Production build, ESLint, and TypeScript passed.
- Chromium checked Contact at 1440px and 390px: no horizontal overflow, all images loaded, no page errors.
- Phone target matches the displayed number.
- No emails sent, calls placed, or appointments booked during verification.

## Contact form

Required: name, email, message. Optional: phone and multiple inquiry topics (program information, getting the book, a consultation, the Toxic Test, something else). `/contact?interest=consultation` preselects the consultation checkbox. The form has validation, duplicate-submit protection, a hidden bot field, a 20-second timeout, loading/success/error states, and preserves entries on failure. Native HTML POST is the fallback without JavaScript.

Messages are sent directly to FormSubmit for forwarding to `columbus@scientology.net`, matching the Visit website. There is no local database. Confirm recipient activation if FormSubmit requests it and verify inbox receipt before launch. An accepted API response alone does not prove delivery. No real emails were sent during this implementation.

Mocked Chromium checks passed for required/whitespace/email validation, consultation preselection, selected topics and contact payload, disabled fields while sending, rejection preserving entries, successful acceptance/reset, and desktop/mobile overflow. Production build, ESLint, and TypeScript passed. Screenshots above show the updated form.
