# CareNest — Doctor-Patient Management System Landing Page

A responsive, modern landing page for a Doctor–Patient Management System built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8)

---

## Features

- **Hero Section** — Introduces the platform with animated dashboard preview and key stats
- **Features Section** — Six key benefits with scroll-triggered fade-in animations
- **Doctors Showcase** — Interactive doctor cards with real photos, ratings, availability, and booking CTA
- **Testimonials** — Patient and doctor reviews with animated entrance
- **Call-to-Action** — Prominent signup/demo section with gradient background
- **Footer** — Organized navigation links, contact info, and social links
- **Fully Responsive** — Mobile-first design, works on all screen sizes
- **Smooth Animations** — Intersection Observer–based scroll animations, hover effects, floating elements

## Tech Stack

| Technology     | Purpose                      |
| -------------- | ---------------------------- |
| Next.js 16     | React framework (App Router) |
| React 19       | UI library                   |
| TypeScript     | Type safety                  |
| Tailwind CSS 4 | Utility-first styling        |
| Lucide React   | SVG icon library             |

## Project Structure

```
src/
├── app/
│   ├── globals.css            # Global styles & custom animations
│   ├── layout.tsx             # Root layout with metadata & fonts
│   └── page.tsx               # Main landing page (composition root)
├── components/
│   ├── ui/
│   │   ├── Button.tsx         # Reusable button (4 variants, 3 sizes)
│   │   ├── SectionHeader.tsx  # Reusable section heading with badge
│   │   └── SectionWrapper.tsx # Reusable section container
│   ├── Navbar.tsx             # Fixed navigation with mobile menu
│   ├── Hero.tsx               # Hero section with dashboard preview
│   ├── Features.tsx           # Feature cards grid
│   ├── Doctors.tsx            # Doctor profile cards
│   ├── Testimonials.tsx       # Testimonial cards
│   ├── CTA.tsx                # Call-to-action section
│   └── Footer.tsx             # Site footer
└── lib/
    ├── constants.ts           # Static data (nav links, features, doctors, etc.)
    ├── hooks.ts               # Custom hooks (useInView for scroll animations)
    └── utils.ts               # Utility functions (cn, scrollToSection)
```

## Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** 9+ (or yarn / pnpm)

### Installation

```bash
# 1. Clone the repository
git clone <repository-url>
cd front-dev-test-cl

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Design Decisions

- **Color Palette**: Medical-grade teal/cyan gradient theme conveying trust and professionalism
- **Typography**: Geist Sans (clean, modern) with strong visual hierarchy
- **Animations**: CSS-only with Intersection Observer triggers — no heavy animation libraries
- **Component Architecture**: Small, focused, reusable components with clear separation of data (`constants.ts`) from presentation
- **Doctor Images**: High-quality professional photos from Unsplash for realistic doctor profiles

## Browser Support

- Chrome / Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## License
