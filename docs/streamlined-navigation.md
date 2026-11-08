# Streamlined reading and navigation

For the subsequent per-page adjustments (restored hero purchase link, removed separate book promotion, combined gains section, and compact Contact), see [page refinements](page-refinements.md).

The user found repeated cross-page/section prompts distracting, especially on mobile. This pass keeps the five-page structure and makes the main navigation/footer responsible for orientation instead of repeatedly interrupting each section.

## Page behavior

- **Home:** shorter opening paragraph replacing the question box/long introduction; one Program Overview button. The Overview and testimonial previews carry no extra buttons. Book preview has one Get the Book action, without repeated gains or a second contact action. Removed the closing multi-option contact/book/consultation panel.
- **Program:** section copy and photos remain, including the corrected local staff photo. Removed the hero skip/book prompts and all section-level book/contact prompts. Replaced the three-card closing panel with one compact Get the Book section.
- **Results:** photo/story layout remains; one Get the Book action at the end instead of a book/contact choice. Existing medical disclaimer link remains.
- **Book:** purchase box remains the primary action. Removed the repeated return-to-order button below testimonials. View cart appears after adding an item.
- **Contact:** message form, phone, and map remain functional page-specific controls.
- **Header:** five page links, cart, and the existing Toxic Test entry remain. Program link is labeled Overview to match the footer.
- **Footer:** five-page navigation, local contact details, and one copy of each legal link. Removed extra promotional contact CTA, outbound website column, and duplicate legal column.

This is a navigation/duplication pass, not a rewrite of substantive Program content or testimonials. Existing commerce and message delivery behavior is unchanged.

## Review

- Home: [desktop](previews/home-desktop.jpg) / [mobile](previews/home-mobile.jpg)
- Program: [desktop](previews/program-desktop.jpg) / [mobile](previews/program-mobile.jpg)
- Results: [desktop](previews/results-desktop.jpg) / [mobile](previews/results-mobile.jpg)
- Book: [desktop](previews/book-desktop.jpg) / [mobile](previews/book-mobile.jpg)
- Contact: [desktop](previews/contact-desktop.jpg) / [mobile](previews/contact-mobile.jpg)

## Validation

Build, ESLint, TypeScript and diff checks passed. Browser review at 1440px and 390px verified body actions (Home 2; Program 1; Results 1 plus legal link), mobile-menu access to all five pages, legal links without duplicates, purchase/message controls, loaded images, and no overflow/page errors. No emails, orders or payments were submitted.
