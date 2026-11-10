# Modern Dental — Minot, North Dakota

A new website for Modern Dental, rebuilt from the content of the original
`moderndental_dentist_31_old` capture. The practice information, doctor bios,
service list, address, phone number, email, and social links are taken from the
old site. The design, structure, and interactions are new.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript in strict mode
- Tailwind CSS v4 with design tokens in `src/app/globals.css`
- Radix UI primitives wrapped in shadcn-style components (`src/components/ui`)
- Motion for page reveals and micro-interactions
- React Hook Form + Zod for the contact form and API contract
- Lucide icons
- Playwright for end-to-end checks

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home, team preview, services, location |
| `/team` | Full team editorial page |
| `/team/dr-christian-meland` | Dr. Christian Meland profile |
| `/team/dr-amber-wentz` | Dr. Amber Wentz profile |
| `/team/dr-eric-meland` | Dr. Eric Meland profile |
| `/services` | Service categories and filterable service explorer |
| `/new-patients` | Contact steps, FAQ, team, location |
| `/contact` | Multi-step contact form, contact cards, map |
| `/api/contact` | Validates form submissions with Zod |

## Commands

```bash
npm run dev        # development server
npm run build      # production build
npm run start      # production server
npm run typecheck  # TypeScript, no emit
npm run lint       # ESLint
npm run test:e2e   # Playwright (build first, or let webServer start)
```

## Content notes

- The doctor portraits, team photo, and logo are the original assets from the
  old site, optimized to WebP/PNG in `public/images`.
- The old site’s contact form fields are preserved exactly: name, email, phone,
  subject, and message.
- The success message “Success! Message received.” is preserved from the old
  site.
- No hours, pricing, insurance details, or service claims were invented. Service
  cards invite a conversation rather than making clinical promises.

## Contact form integration

`POST /api/contact` validates the payload with `contactSchema` in
`src/lib/schemas.ts`. The route currently returns the original confirmation
message after validation; it does not send email on its own. To deliver
messages in production, connect the validated payload to your mail provider or
practice inbox inside `src/app/api/contact/route.ts`.

## Design system

The visual direction is “prairie modern”: deep pine green, warm bone and cream,
clay accents, Fraunces display type, and Karla for body copy. Backgrounds use
layered gradients and a subtle grain texture; surfaces use glassmorphism where
it helps hierarchy. All motion respects `prefers-reduced-motion`.
