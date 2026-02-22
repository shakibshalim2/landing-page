# CareNest Project Rules

## Brand Identity
- **Brand Name**: CareNest
- **Tagline**: "Where Care Meets Comfort"

## Color Palette
- **Primary**: `#0d9488` (Teal-600 - health, trust)
- **Accent**: `#14b8a6` (Teal-500 - lighter accent)
- **Success**: `#22C55E` (Green - positive actions)
- **Text Dark**: `#0F172A` (Slate-900)
- **Text Muted**: `#64748B` (Slate-500)
- **Background**: `#FFFFFF` with subtle dot patterns

## Design Principles

### Human-Made Design Guidelines
- Avoid excessive gradients - use flat colors with subtle depth
- Use asymmetry intentionally for visual interest
- Vary icon colors across features (don't use single color)
- Keep shadows subtle and realistic (`shadow-sm`, `shadow-lg`)
- Use actual images (Unsplash) instead of placeholders
- Typography should breathe - generous line-height and spacing
- Avoid overly rounded corners (use `rounded-lg` or `rounded-xl`, not `rounded-3xl`)

### UI Patterns
- Clean, minimalist interfaces with clear hierarchy
- White space is essential - don't overcrowd
- Cards with subtle borders (`border-slate-100`) and light shadows
- Avoid glassmorphism overuse - use sparingly on floating elements only

### Spacing Standards
- Section padding: `py-16 md:py-20` or `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Grid gaps: `gap-5` for cards, `gap-3` for tighter layouts
- Component margins: consistent `mb-4`, `mb-6`, or `mb-8`

### Typography
- Use Geist Sans for clean rendering
- Headlines: `text-2xl sm:text-3xl md:text-4xl` with `tracking-tight`
- Body: `text-sm` or `text-base` with `leading-relaxed`
- Keep font weights minimal - regular (400), medium (500), semibold (600), bold (700)

### Animations
- Keep subtle: `duration-200` or `duration-300`
- Scroll-triggered fade-in with `translate-y-6` (not 8+)
- Hover states: subtle color change, small shadow increase
- Avoid bouncy or dramatic animations

### Color Usage by Section
- Hero: Light background (`bg-slate-50`) with teal accents
- Features: White cards on white/gray background, varied icon colors
- Doctors: Light gray background (`bg-slate-50`)
- Testimonials: White background
- CTA: Dark (`bg-slate-900`) with teal accents
- Footer: Dark (`bg-slate-900`)

## Code Standards
- TypeScript strict mode
- No inline magic numbers
- Extract constants to `lib/constants.ts`
- Keep components under 120 lines
- Use `cn()` for conditional classes
