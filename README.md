<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 3" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-FF0050?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
</p>

# Anujot Singh — Portfolio

A modern, single-page portfolio website showcasing AI/ML engineering projects, technical skills, and professional background. Built with **React 19**, **Vite 8**, and **Framer Motion**, featuring a dark glassmorphism design with a signature neon-yellow (`#DFFF00`) accent.

🔗 **Live:** [anujotsingh.dev]([https://anujotsingh.dev](https://portfolio-chi-lilac-27.vercel.app/))

---

## ✨ Features

| Category | Details |
|---|---|
| **Design System** | Dark theme with custom color tokens, glassmorphism cards, noise textures, and ambient gradient blobs |
| **Animations** | Scroll-triggered reveals, parallax hero, floating chips, interactive dot grid, and micro-interactions — all powered by Framer Motion |
| **Responsive** | Fully responsive layout with mobile hamburger navigation and adaptive grid layouts |
| **SEO** | Open Graph & Twitter Card meta tags, semantic HTML, descriptive `<title>`, and structured heading hierarchy |
| **Performance** | Vite HMR, optimized font loading via Google Fonts preconnect, and lazy viewport-based animations |
| **Accessibility** | `aria-labels` on interactive elements, keyboard-navigable links, and decorative elements marked `aria-hidden` |

---

## 📸 Sections

- **Hero** — Animated intro with profile image, floating skill chips, parallax dot grid background, and CTAs (View Resume / Explore Projects)
- **Projects** — Showcase of 4 featured ML/AI projects with thumbnails, tech tags, metrics, external links (GitHub, Live, Demo, HuggingFace), and a detail modal
- **About** — Background narrative and engineering focus areas with staggered animations
- **Skills** — Categorized skill cards (ML/DL, MLOps/Backend, NLP/GenAI, Core CS) with hoverable tech tags
- **Resume** — Download and view resume section
- **Contact** — Email, LinkedIn, and GitHub links with an ambient glow CTA card
- **Footer** — Social links and copyright

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev) |
| **Build Tool** | [Vite 8](https://vite.dev) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com) + custom CSS design system |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev) + custom SVG icons |
| **Charts** | [Recharts](https://recharts.org) |
| **Linting** | [OxLint](https://oxc.rs) |
| **Hosting** | [Vercel](https://vercel.com) |

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── projects/           # Project thumbnails (PNG)
│   │   ├── profile.png         # Profile photo
│   │   └── Resume.pdf          # Downloadable resume
│   ├── favicon.svg
│   ├── icons.svg               # SVG sprite
│   └── _redirects              # Netlify/Vercel SPA redirect rules
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed nav with scroll spy & mobile menu
│   │   ├── Hero.jsx            # Parallax hero with animated dot grid
│   │   ├── HeroGrid.jsx        # Interactive proximity-reactive grid
│   │   ├── Projects.jsx        # Project cards with detail modal
│   │   ├── About.jsx           # Background & engineering focus
│   │   ├── Skills.jsx          # Categorized skill cards
│   │   ├── Resume.jsx          # Resume download/view CTA
│   │   ├── Contact.jsx         # Contact links with ambient glow
│   │   ├── Footer.jsx          # Footer with social links
│   │   ├── ScrollProgress.jsx  # Top scroll progress bar
│   │   └── Icons.jsx           # Custom SVG icon components
│   ├── data/
│   │   ├── projects.js         # Project metadata & descriptions
│   │   └── skills.js           # Skill categories & items
│   ├── assets/                 # Source assets (hero image, logos)
│   ├── App.jsx                 # Root component — section composition
│   ├── main.jsx                # React DOM entry point
│   └── index.css               # Global styles & design system
├── index.html                  # HTML entry with SEO & OG meta
├── tailwind.config.js          # Custom theme (colors, fonts, animations)
├── vite.config.js              # Vite + React plugin config
├── postcss.config.js           # PostCSS with Tailwind & Autoprefixer
├── vercel.json                 # Vercel SPA rewrite rules
├── .oxlintrc.json              # Linter configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/anujott-codes/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server with HMR
npm run dev
```

The app will be available at `http://localhost:5173`.

### Production Build

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

### Linting

```bash
# Run OxLint
npm run lint
```

---

## 🌐 Deployment

This site is deployed on **Vercel** with automatic deployments on push to `main`.

The [`vercel.json`](vercel.json) handles SPA routing with a catch-all rewrite:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 🎨 Design System

The design system is defined across [`tailwind.config.js`](tailwind.config.js) and [`src/index.css`](src/index.css):

| Token | Value | Usage |
|---|---|---|
| `base-950` | `#030303` | Page background |
| `accent-400` | `#DFFF00` | Primary accent (neon yellow) |
| `txt-primary` | `#F5F5F0` | Main text |
| `txt-secondary` | `#A3A3A3` | Supporting text |
| `txt-muted` | `#737373` | Subtle text |
| `glass-light` | `rgba(255,255,255,0.04)` | Glassmorphism fills |
| `glass-border` | `rgba(255,255,255,0.08)` | Glass card borders |

**Typography:** Inter (sans-serif) + JetBrains Mono (monospace)

---

## 📄 License

This project is open source and available for reference and learning purposes.

---

<p align="center">
  <sub>Designed & Engineered with Precision by <strong>Anujot Singh</strong></sub>
</p>
