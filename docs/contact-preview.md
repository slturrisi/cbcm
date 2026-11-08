# Contact layout preview

This milestone replaces the Contact page's placeholder paragraph with a responsive local-contact section, an AI-generated reception concept, and the shared footer. Address, phone, and email come from the supplied footer. Email opens the visitor's mail app; phone opens the dialer; map opens Google Maps. No form submissions or scheduling service are implemented.

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
