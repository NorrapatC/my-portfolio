# Safe Norrapat — Personal Portfolio

Personal portfolio website showcasing projects, skills, and certifications.
Built with Next.js 15, Ant Design, Framer Motion, and Tailwind CSS v4.

**Live URL:** http://localhost:3000 (dev) · Deploy target: Vercel

---

## Tech Stack

| Layer | Library | Version |
|-------|---------|---------|
| Framework | Next.js | 15.2.4 |
| UI Library | Ant Design | 5.x |
| Animation | Framer Motion | 12.x |
| Styling | Tailwind CSS | v4 |
| Typewriter | react-simple-typewriter | 5.x |
| Language | JavaScript (JSX) | ES2022 |
| Runtime | Node.js | 18+ |

---

## Project Structure

```
my-portfolio/
├── public/
│   ├── images/
│   │   ├── certificates/       # Certificate images (7 files)
│   │   ├── profile2.png        # Profile photo
│   │   ├── typescript.svg      # TypeScript skill icon
│   │   └── [skill icons...]    # html5, css3, js, react, etc.
│   └── resume.pdf              # Downloadable CV
├── src/
│   ├── app/
│   │   ├── layout.jsx          # Root layout (metadata, fonts)
│   │   ├── page.jsx            # Main page — assembles all sections
│   │   └── globals.css         # Tailwind import + custom theme tokens
│   └── components/
│       ├── Navbar.jsx          # Fixed top navbar with mobile hamburger
│       ├── Theme.jsx           # Centralized color tokens
│       └── pages/
│           ├── Main.jsx        # Hero: name, typewriter, Resume + GitHub buttons
│           ├── About.jsx       # About me: profile photo + bio
│           ├── TechSkills.jsx  # Skills grid with icons
│           ├── Certificates.jsx# Certificate gallery with modal lightbox
│           ├── Project.jsx     # Project cards with tech badges + GitHub links
│           └── Contact.jsx     # Email, GitHub, LinkedIn contact cards
└── package.json
```

---

## Sections

| # | Section | id | Description |
|---|---------|-----|-------------|
| 1 | Home | `#home` | Hero with typewriter animation, Resume download, GitHub link |
| 2 | About | `#about` | Profile photo + bio paragraph |
| 3 | Skills | `#skills` | 14 tech skill icons in responsive grid |
| 4 | Certificates | `#certificates` | 7 certificate images, click to open full-size modal |
| 5 | Projects | `#projects` | 3 project cards with tech badges + View Code links |
| 6 | Contact | `#contact` | Email, GitHub, LinkedIn cards |

---

## Theme

All colors are defined in `src/components/Theme.jsx` and registered as Tailwind tokens in `globals.css`.

| Token | Hex | Usage |
|-------|-----|-------|
| `background` | `#F5F1ED` | Page/section background |
| `navbar` | `#D8C4B6` | Navbar + mobile menu |
| `textPrimary` | `#5E503F` | Headings, logo |
| `textSecondary` | `#A28C7E` | Body text |
| `earthGreen` | `#6D7B3D` | Accents, borders, buttons |
| `earthOrange` | `#F2A27A` | Tech badges |
| `highlight` | `#D1B48C` | Card borders, hover effects |
| `button` | `#8F7D56` | Resume button background |
| `shadow` | `rgba(94,80,63,0.2)` | Card shadows |

> **Tailwind v4 note:** Custom tokens (`earthGreen`, `earthOrange`, `highlight`) are registered via `@theme` in `globals.css`. Use `border-earthGreen`, `text-earthGreen`, `bg-earthOrange` as Tailwind classes directly.

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — port auto-increments if occupied.

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Dev | `npm run dev` | Start dev server with HMR |
| Build | `npm run build` | Production build |
| Start | `npm start` | Serve production build |
| Lint | `npm run lint` | ESLint check |

---

## Certificates

Certificate images are stored in `public/images/certificates/`:

| File | Title |
|------|-------|
| `certificate.png` | Development Certificate |
| `certificate_all_ai.jpg` | AI & Technology Certificate |
| `certificate_canva_ai.jpg` | Canva AI Certificate |
| `codingofall.png` | Coding of All |
| `digitalandcyber.png` | Digital & Cyber Security |
| `linedevcamp.png` | LINE Developer Camp |
| `ML.png` | Machine Learning |

---

## Projects Featured

| Project | Tech Stack | GitHub |
|---------|-----------|--------|
| Leave Management System | Next.js, TypeScript, Tailwind, SQL Server | [repo](https://github.com/safe-norrapat/leave-management) |
| Personal Dashboard | Next.js, TypeScript, Tailwind, Notion API | [repo](https://github.com/safe-norrapat/dashboard) |
| Portfolio Website | Next.js, Ant Design, Framer Motion, Tailwind | [repo](https://github.com/safe-norrapat/my-portfolio) |

---

## Deployment

Deploy to Vercel in one command:

```bash
npx vercel
```

Or connect the GitHub repo to [vercel.com](https://vercel.com) for automatic deploys on push.

---

## Known Decisions & Notes

- **`"use client"` required** on all components using Framer Motion, useState, or Typewriter — Next.js App Router treats these as client-only boundaries.
- **No `<a><button>` nesting** — all interactive links use `<motion.a>` or plain `<a>` directly, never wrapping an antd `<Button>`. This avoids invalid HTML and browser console warnings.
- **Tailwind v4 custom colors** must be declared in `globals.css` via `@theme {}` — not in `tailwind.config.js` (which v4 no longer uses).
- `bg-opacity-*` is deprecated in Tailwind v4 — use `bg-color/opacity` syntax instead.
