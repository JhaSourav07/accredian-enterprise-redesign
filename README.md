# Accredian Enterprise — Landing Page Redesign

A premium, dark-mode enterprise landing page built for **Accredian** — redesigned to match the aesthetic of a $100M+ startup. Built with Next.js App Router, Tailwind CSS, and TypeScript, with a focus on glassmorphism, smooth animations, and a fully responsive layout.

---

## ✨ Live Preview

> Deploy on Vercel with a single `git push`. See [Deployment](#-deployment) below.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org/) — App Router, Server Components |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) — utility-first, JIT |
| **Language** | [TypeScript](https://www.typescriptlang.org/) — strict mode |
| **Icons** | [Lucide React](https://lucide.dev/) + custom inline SVGs |
| **Deployment** | [Vercel](https://vercel.com/) — edge network, serverless functions |
| **Fonts** | System default / Google Fonts via `next/font` |

---

## 🚀 Key Features

### 🎨 Glassmorphism Design System
Every card, modal, and surface uses a carefully tuned glassmorphism system — translucent backgrounds (`bg-white/[0.04]`), soft `backdrop-blur`, and gradient borders that respond to hover state.

### 🌌 CSS-Driven Live Background
A global `LiveBackground` component (`/src/components/ui/LiveBackground.tsx`) renders 5 layered, blurred blobs fixed behind every page section. It reacts to:
- **Cursor position** — each layer moves at a different speed (parallax depth)
- **Scroll** — deeper layers shift slower, creating a 3D-parallax illusion
- All motion is interpolated using `lerp` in a `requestAnimationFrame` loop — completely GPU-composited via `will-change: transform`.

### 🗓 Responsive Alternating Timeline
The `Timeline` section features:
- An alternating above/below label layout with circular glowing nodes
- A horizontal gradient connector line with chevron markers
- Vertical light-streak animations drifting in the background
- Automatic fallback to a clean vertical list on mobile

### 📬 Serverless API Lead Capture
The **Enquire Now** form in the Hero section is backed by a Next.js Route Handler (`/src/app/api/enquire/route.ts`) that processes form submissions server-side — no external services required for local development, ready for CRM/email integration.

### 🔢 Animated Stats Section
Network-graph dot animation drives the Stats background, with counting number animations and glassmorphic stat cards.

### 🏢 Partner Showcase with Spotlight Hover
The Partnerships section uses CSS `radial-gradient` as a cursor-tracking spotlight for each logo — creating a premium interactive feel.

---

## 📁 Folder Structure

```
accredian-enterprise-redesign/
├── public/                         # Static assets
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout — Navbar + Footer + LiveBackground
│   │   ├── page.tsx                # Home page — section composition
│   │   └── api/
│   │       └── enquire/
│   │           └── route.ts        # Serverless lead capture API
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Sticky nav with anchor scroll links
│   │   │   └── Footer.tsx          # 5-col footer with social links
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Hero — graph animation + enquiry form
│   │   │   ├── Stats.tsx           # Animated network-graph background stats
│   │   │   ├── Partnerships.tsx    # Spotlight-hover partner logos
│   │   │   ├── Timeline.tsx        # Alternating horizontal timeline
│   │   │   ├── DomainExpertise.tsx # 7-domain glassmorphic card grid
│   │   │   ├── CourseSegmentation.tsx # Split-panel interactive segmentation
│   │   │   ├── SkillEnhancement.tsx   # Parallax skill track section
│   │   │   ├── CATFramework.tsx    # CAT methodology diagram
│   │   │   ├── Results.tsx         # 3-step process with connector
│   │   │   ├── FAQ.tsx             # Accordion FAQ
│   │   │   ├── Testimonials.tsx    # 3-card grid + mobile carousel
│   │   │   └── CTA.tsx             # Glassmorphic CTA with shimmer button
│   │   └── ui/
│   │       ├── LiveBackground.tsx  # Global cursor-parallax background
│   │       └── Button.tsx          # Reusable button primitive
│   └── lib/                        # Shared utilities / helpers
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── package.json
```

---

## 🏃 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/JhaSourav07/accredian-enterprise-redesign.git
cd accredian-enterprise-redesign

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 🚢 Deployment

This project is configured for zero-config deployment on **Vercel**.

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) and every push to `main` auto-deploys.

---

## 🎨 Design Tokens

| Token | Value | Usage |
|---|---|---|
| Base background | `#030712` | All section backgrounds |
| Accent gradient | `blue-400 → indigo-400 → purple-400` | Headings, CTAs |
| Glass surface | `bg-white/[0.04]` | Cards, modals |
| Border | `border-white/8` | Default card borders |
| Glow — blue | `rgba(59,130,246,0.35)` | Active state shadows |
| Glow — violet | `rgba(139,92,246,0.35)` | Hover accent glows |

---

## 🧩 Section Map

| Section | Anchor ID | Description |
|---|---|---|
| Hero | `#home` | Full-screen hero with CTA |
| Stats | `#stats` | Key metrics with background animation |
| Partnerships | `#clients` | Partner logo showcase |
| Timeline | `#how-it-works` | 7-step alternating process |
| Domain Expertise | `#accredian-edge` | 7 specialization domains |
| Course Segmentation | `#cat` | 4-category split panel |
| Skill Enhancement | — | 4 professional tracks |
| Results | — | 3-step delivery process |
| FAQ | `#faqs` | Accordion-style questions |
| Testimonials | `#testimonials` | ADP, Bayer, Reliance quotes |
| CTA | — | Final conversion section |

---

## 👤 Author

**Sourav Jha**
- GitHub: [@JhaSourav07](https://github.com/JhaSourav07)
- Built with ❤️ using Next.js, Tailwind CSS, and a lot of glassmorphism

---

## 📄 License

This project is for portfolio and demonstration purposes. All Accredian branding is the property of Accredian Education Pvt. Ltd.
