# ZENTRAE

A premium, highly animated website for ZENTRAE - a social media marketing agency.

## Features

- 🎨 **Futuristic Design** - Ocean-inspired, dreamy aesthetic with smooth 60fps animations
- 🌓 **Dark/Light Theme** - Seamless theme switching with system preference detection
- 🎭 **Interactive Hero** - React Three Fiber ocean scene with animated waves
- ✨ **GSAP Animations** - Scroll-triggered animations for engaging storytelling
- 🎯 **Framer Motion** - Smooth micro-interactions throughout
- ♿ **Accessible** - WCAG compliant with keyboard navigation and screen reader support
- 📱 **Responsive** - Mobile-first design that works on all devices
- ⚡ **Performance Optimized** - Code splitting, lazy loading, and GPU acceleration

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **GSAP** (ScrollTrigger)
- **React Three Fiber** (Hero section)
- **Three.js**

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts    # API route for contact form email
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles and theme variables
│   └── metadata.ts         # SEO metadata configuration
├── components/
│   ├── Hero.tsx            # Hero section with 3D ocean scene
│   ├── OceanScene.tsx      # Three.js ocean animation
│   ├── Navigation.tsx      # Main navigation with theme switcher
│   ├── About.tsx           # About section with GSAP animations
│   ├── Services.tsx        # Services grid with scroll animations
│   ├── Portfolio.tsx       # Portfolio showcase
│   ├── Testimonials.tsx    # Testimonials carousel
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer component
│   └── ThemeProvider.tsx   # Theme context provider
└── lib/
    └── utils.ts            # Utility functions
```

## Environment Variables

Create a `.env.local` file in the root directory (optional):

```env
# Optional: Site URL for SEO and metadata
NEXT_PUBLIC_SITE_URL=https://zentrae.com
```

### Contact Form

The contact form uses a simple **mailto link** approach - no backend configuration needed! When users click "Send Message", it opens their default email client (Gmail, Outlook, etc.) with a pre-filled email to `zentraeindia@gmail.com` containing all their form information.

**No email service setup required** - it works immediately! ✨

## Performance

- Code splitting with Next.js automatic optimization
- Lazy loading for heavy components (Three.js)
- GPU-accelerated animations
- Optimized images and assets
- Reduced motion support for accessibility

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus visible indicators
- Reduced motion support
- Screen reader friendly

## License

© 2024 ZENTRAE. All rights reserved.
