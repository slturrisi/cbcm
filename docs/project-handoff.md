# CBCM Website — Project Handoff for Codex

## 1. Project Overview

We are building a new public-facing website for **Clear Body, Clear Mind (CBCM)**, promoting the Purification Program in Central Ohio.

The website is intended to replace the outdated presentation of the existing CBCM website with a sophisticated, modern, premium digital experience.

**This is an active Next.js project, not a new project proposal. The initial homepage hero has already been implemented and is working.**

The immediate objective is to continue building and refining the actual website.

### Project information

- **Project name:** CBCM
- **GitHub repository:** `https://github.com/slturrisi/cbcm`
- **Production domain:** `https://purif.cenohio.org`
- **Vercel project:** `cbcm`
- **Local project directory:** `~/Desktop/cbcm-site`
- **Deployment:** GitHub → Vercel
- **Status:** Initial hero implemented and running successfully

This is a standalone website, separate from the existing CenOhio Forms application.

---

## 2. Technology Stack

The project was created with `create-next-app` using:

- Next.js 16.2.12
- React 19
- TypeScript
- Tailwind CSS v4
- App Router
- ESLint
- React Compiler enabled
- Default `@/*` import alias
- No `src/` directory

Additional packages installed:

- `lucide-react`
- `framer-motion`

The project also includes `AGENTS.md` and `CLAUDE.md`.

Do not unnecessarily reinstall dependencies, recreate the project, or change the existing architecture.

Inspect the actual repository before making modifications.

---

## 3. Website Purpose

The site must serve several audiences:

- Visitors who have completed the Toxic Test
- Direct mail recipients
- People scanning QR codes
- Referrals
- General public researching the program

### Primary conversion objectives

In priority order:

1. **Purchase the Clear Body, Clear Mind book**
2. **Request information or schedule a consultation**
3. **Take the Toxic Test**

The website should explain the program clearly while encouraging visitors to take the next appropriate action.

### Existing Toxic Test

The Toxic Test already exists in the separate CenOhio Forms platform.

URL:

`https://forms.cenohio.org/forms/toxictest`

Do not rebuild it.

The CBCM website should link to it prominently.

---

## 4. Creative Direction

The visual direction has already been explored extensively and an initial concept was approved.

The user wants the site to feel like a premium, professionally designed digital experience.

### Design references

- Apple
- Tesla
- Aesop
- Four Seasons
- Premium fitness brands
- High-end wellness and medical spa websites

These are references for design quality, layout discipline, typography, and visual presentation—not sources for marketing claims.

### Desired characteristics

- Modern
- Minimal
- Premium
- Clean
- Crisp
- Bright
- Spacious
- Calm
- Trustworthy
- Photography-driven
- Carefully composed
- Sophisticated typography
- Restrained animation

### Avoid

- Generic wellness templates
- Dated informational website design
- Overcrowded pages
- Excessive text
- Excessive gradients
- Glassmorphism everywhere
- Flashy effects
- Unnecessary decorative elements
- Tiny images
- Generic stock imagery
- Overly clinical or corporate presentation

**The goal is to create a distinctive, high-end experience rather than a conventional promotional website.**

---

## 5. Brand Identity and Visual Assets

The existing Clear Body, Clear Mind materials establish a strong visual identity.

### Primary visual motif

**The waterfall.**

The waterfall appears throughout the existing branding, including the book cover and promotional materials.

It should function as a recurring visual signature rather than generic background decoration.

Use it strategically.

### Secondary visual theme

Light:

- Sunlight
- Water reflections
- Bright interiors
- Open spaces
- Clean architectural photography

### Brand colors

The initial design uses a palette derived from the existing teal/cyan branding.

Current CSS variables include:

```css
--background: #f7fbfc;
--foreground: #102f3a;
--muted: #56717a;
--teal: #1da6b5;
--teal-dark: #087487;
--navy: #0c3341;
```

The overall site should primarily use white or very light backgrounds, with teal, cyan, and navy used strategically.

Do not make every section blue.

### Typography

The initial implementation uses:

- **Cormorant Garamond** — display/headline font
- **Plus Jakarta Sans** — body/interface font

The combination of expressive display typography with a modern sans serif is intentional.

Typography may be refined visually, but preserve the general approach unless a better design is demonstrated.

### Available assets

The user has already supplied:

1. Waterfall logo/icon
2. Three-dimensional Clear Body, Clear Mind book render
3. Large waterfall background artwork

These were organized into the project's `public/` directory.

Expected asset paths from the initial implementation:

```text
public/
├── images/
│   ├── hero/
│   │   └── waterfall-hero.jpg
│   └── book/
│       └── clear-body-clear-mind-book.jpg
└── logos/
    └── cbcm-waterfall.png
```

Verify actual filenames before changing code.

Additional facility photography, participant photos, testimonials, and other assets will be provided later.

---

## 6. Content Requirements — Extremely Important

The user wants official CBCM information preserved accurately.

For substantive program content:

- Preserve official terminology.
- Preserve quotations exactly.
- Preserve names and titles.
- Do not invent scientific or medical claims.
- Do not paraphrase official claims into stronger or different claims.
- Do not invent testimonials, results, statistics, or program details.
- Use approved source material for substantive program descriptions.

New navigation labels, section headings, interface copy, and transitions can be written as needed, provided they do not misrepresent the program.

If official source material is missing, request it rather than inventing substantive content.

### Current hero

The existing hero uses:

**Headline:**  
Clear Body. Clear Mind.

**Eyebrow:**  
The Effective Purification Program

**Supporting copy:**  
Discover the program described in L. Ron Hubbard's best-selling book and learn more about its availability in Central Ohio.

**Buttons:**

- Learn More
- Get the Book

These were used for the initial prototype and can be refined as the design develops.

---

## 7. Website Architecture

The user specifically does **not** want the entire website to be one enormous scrolling page.

The agreed structure is a multi-page website:

### Home

A visually compelling overview that introduces the program and directs visitors to dedicated pages.

### Overview

Educational content explaining the program, its purpose, how it works, frequently asked questions, and approved quotations.

### Results

Testimonials, success stories, photographs, and eventually videos.

### Book

A premium, product-focused page dedicated to the Clear Body, Clear Mind book.

This should feel like a high-end product page, with strong imagery, descriptions, and a clear purchasing path.

### Contact

Central Ohio-specific information, facility details, map, inquiries, and consultation requests.

### Toxic Test

Prominent link to the existing questionnaire on the separate Forms platform.

### Important architectural distinction

The homepage should preview the content of the other pages, not reproduce all of it.

Each page should have a focused purpose.

---

## 8. Current Implementation

The first version of the homepage hero has been implemented successfully.

The user confirmed:

> "ok works now. it was just on the wrong level - something snagged. so far it looks great!"

This means the existing design is a successful starting point.

**Do not discard or completely redesign the hero without discussing the change.**

### Current structure

```text
cbcm-site/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── home/
│   │   └── Hero.tsx
│   └── layout/
│       └── Header.tsx
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   └── book/
│   └── logos/
│
├── AGENTS.md
├── CLAUDE.md
└── package.json
```

### Current `app/page.tsx`

```tsx
import Hero from "@/components/home/Hero";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
    </main>
  );
}
```

### Existing Header

The current header includes:

- CBCM waterfall logo
- Clear Body, Clear Mind wordmark
- Overview navigation
- Results navigation
- Book navigation
- Contact navigation
- Take the Toxic Test button

The header is transparent over the waterfall hero.

Navigation links currently use section anchors such as `#overview` and `#book`.

These should eventually be updated to the actual multi-page routes as those pages are implemented.

### Existing Hero

The hero currently includes:

- Full-screen waterfall artwork
- Dark teal gradient overlays for legibility
- Large display headline
- Supporting text
- Learn More button
- Get the Book button
- Large book render on the right
- Responsive desktop layout
- Fade toward the light background at the bottom

The book render is currently hidden on smaller screens.

The first implementation uses CSS transitions and Tailwind styling rather than extensive motion effects.

### Known issue already resolved

Initially, Next.js could not resolve:

`@/components/home/Hero`

because the components folder was created at the wrong directory level.

The folder was corrected and the site now works.

No further action is required for that issue.

---

## 9. Development Principles

### Reusable components

Keep page sections and UI components modular.

Prefer:

```text
components/
├── home/
├── layout/
└── ui/
```

Use shared components where appropriate.

Avoid putting the entire homepage into one large `page.tsx`.

### Preserve existing functionality

Do not overwrite working components unnecessarily.

Read existing files before modifying them.

Make targeted changes.

### Responsive design

The website must work beautifully on desktop and mobile.

Mobile is especially important because QR-code visitors may arrive directly from printed materials.

Do not simply shrink desktop layouts.

Recompose layouts for smaller screens where necessary.

### Performance

Use:

- Next.js image optimization
- Appropriate image sizing
- Lazy loading for noncritical images
- Optimized fonts
- Lightweight animations
- Accessible navigation
- Semantic HTML

### Motion

Use subtle, purposeful motion.

Avoid animation merely for decoration.

### Development workflow

The user prefers incremental implementation and visual review.

Make a meaningful change, let the user inspect it, then refine.

Do not spend multiple responses discussing design philosophies instead of building.

---

## 10. What Needs to Be Built Next

The existing hero is the starting point.

The next phase should turn it into a complete homepage.

Suggested implementation order:

### A. Refine the existing header and hero

Review desktop and mobile behavior.

Potential improvements:

- Functional mobile navigation
- Proper navigation routes
- Header scroll behavior
- Book render responsiveness
- CTA hierarchy
- Typography and spacing refinements

### B. Build homepage sections

Create components such as:

```text
components/home/
├── Hero.tsx
├── Intro.tsx
├── ProgramPreview.tsx
├── ResultsPreview.tsx
├── BookSection.tsx
├── ContactPreview.tsx
└── FinalCTA.tsx
```

These should feel like a cohesive premium website rather than unrelated blocks.

### C. Build footer

A spacious, sophisticated footer with:

- Branding
- Navigation
- Contact information
- Book link
- Toxic Test link
- Relevant organizational information

### D. Build dedicated pages

```text
app/
├── page.tsx
├── overview/
│   └── page.tsx
├── results/
│   └── page.tsx
├── book/
│   └── page.tsx
└── contact/
    └── page.tsx
```

### E. Add functional integrations

Eventually:

- Book purchasing
- Contact inquiries
- Consultation scheduling
- Central Ohio facility information
- Testimonials and media

These integrations are not yet implemented, and the specific purchasing and scheduling services have not been finalized.

Do not assume a particular e-commerce or booking provider.

---

## 11. Relationship to CenOhio Forms

The user also maintains a separate Next.js/Supabase application called CenOhio Forms.

That application lives at:

`forms.cenohio.org`

It provides:

- Admin-created questionnaires
- Public form links
- Response storage
- Conditional questions
- Branding
- CSV exports
- Toxic Test

The CBCM website is intentionally a **separate Next.js project and GitHub repository**.

Do not merge the applications.

The existing Toxic Test should be linked to rather than recreated.

The CBCM website may eventually integrate with other CenOhio services, but those decisions will be made individually.

---

## 12. How to Work With the User

This is particularly important.

The user has already spent considerable time discussing the design and setting up the project.

They became frustrated when previous assistance repeatedly produced more plans, design philosophies, and proposals instead of actual code.

Therefore:

**Prioritize implementation over discussion.**

The user appreciates:

- Concrete code changes
- Visual progress
- Clear instructions
- Small, testable milestones
- Professional design judgment
- Thoughtful refinements
- Consistency across components

Avoid:

- Repeatedly explaining the overall vision
- Long planning documents
- Asking questions already answered
- Recommending unnecessary infrastructure changes
- Recreating existing files
- Large amounts of speculative copy
- Endless setup steps before visible progress

When working in Codex, inspect the repository, make the agreed changes directly, and summarize what was changed and how to test it.

---

## 13. Immediate Instructions for Codex

We are resuming an existing, working Next.js project.

**Start by inspecting the repository and the current homepage implementation.**

Specifically:

1. Read `AGENTS.md` and relevant project instructions.
2. Inspect `app/page.tsx`, `app/layout.tsx`, and `app/globals.css`.
3. Inspect `components/home/Hero.tsx` and `components/layout/Header.tsx`.
4. Confirm the available images in `public/`.
5. Preserve the existing visual direction.
6. Identify the most useful next implementation milestone.

The user has already approved the general appearance of the initial hero.

We now want to move forward with building the complete CBCM website, starting with the homepage and reusable components.

**Do not start from scratch. Do not generate another design bible. Work in the existing codebase and prioritize visible, functional progress.**