## Manzoor Art Gallery Lahore — Website Plan

A refined, museum-style single-page website with smooth scroll navigation between sections. Aesthetic: ivory background, deep charcoal text, gold accents, elegant serif headings (Playfair Display) paired with clean sans-serif body (Inter).

### Sections (single-page, anchor nav)

1. **Header / Nav** — Gallery name in serif, gold underline accent, links: Home · About · Portraits · Artists · Gallery · Contact. Sticky, translucent on scroll.

2. **Hero** — Full-viewport ivory backdrop, large serif title "Manzoor Art Gallery Lahore", refined tagline ("A destination for creativity, culture, and excellence in fine art"), gold-bordered "Book an Appointment" CTA, subtle appointment-only notice chip. Decorative framed artwork visual on the right.

3. **About** — Two-column: serif heading "Our Story" + the owner's first paragraph reformatted into elegant prose. Three small stat/value cards: Authenticity · Heritage & Contemporary · Personalized Service.

4. **Portrait Services** — Feature section using the second paragraph. Heading "Custom Portraits, Crafted to Last." Three service cards with icons: Personal Keepsakes · Family Portraits · Professional Commissions. Gold "Commission a Portrait" button.

5. **Featured Artists** — Grid of 4–6 artist cards (placeholder portraits, name, role: Established / Emerging, short bio). Refined hover lift.

6. **Gallery** — Masonry grid of placeholder artworks (varied aspect ratios). Click opens a lightbox (shadcn Dialog) with large image, title, and caption. Smooth fade-in on scroll.

7. **Appointment Notice Banner** — Full-width charcoal band with gold rule: "Kindly visit only after scheduling an appointment."

8. **Contact + Appointment Form** — Two-column:
   - Left: placeholder contact details (Address: Lahore, Pakistan · Phone: [Your Phone] · Email: [Your Email] · Hours: By appointment only) and social icon placeholders.
   - Right: Appointment form — Name, Email, Phone, Preferred Date (shadcn date picker), Time slot (select), Purpose (select: Visit / Portrait Commission / Inquiry), Message. Submit shows a toast confirmation (frontend-only; data not stored yet).

9. **Footer** — Gallery name, short tagline, quick links, copyright, gold hairline divider.

### Visual / Design System

- Background: ivory `#FAF7F1`
- Foreground: charcoal `#1B1B1B`
- Accent: muted gold `#B8893A`
- Muted surface: warm off-white `#F1ECE0`
- Headings: Playfair Display (serif), generous letter-spacing on small caps labels
- Body: Inter
- Generous whitespace, thin gold rules as section dividers, subtle fade/slide-up animations on scroll

### Technical Notes

- Update `index.css` design tokens (ivory/charcoal/gold HSL variables) and add Google Fonts.
- Replace `src/pages/Index.tsx` with composed sections; create components under `src/components/gallery/` (Hero, About, Portraits, Artists, GalleryGrid, AppointmentForm, ContactSection, Footer, NavBar, Lightbox).
- Use shadcn `dialog` for lightbox, `popover`+`calendar` for date picker, `select`, `input`, `textarea`, `form`, `sonner` for toasts.
- Placeholder images via Unsplash fine-art queries (portraits, paintings, frames) — easy to swap later.
- Smooth scroll via anchor IDs; mobile nav using shadcn `sheet`.
- Form is client-side only with validation (zod + react-hook-form); no backend yet — can add Lovable Cloud later to persist appointments and email notifications.

### Out of scope (can add later)
- Storing appointments in a database / email notifications
- Admin panel for managing artworks
- E-commerce / pricing
