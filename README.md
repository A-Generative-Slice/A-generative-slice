# A Generative Slice 🚀

<div align="center">

[![Website](https://img.shields.io/badge/Website-agenerativeslice.com-orange?style=for-the-badge&logo=google-chrome&logoColor=white)](https://agenerativeslice.com)
[![CI/CD](https://img.shields.io/github/actions/workflow/status/A-Generative-Slice/A-generative-slice/deploy.yml?branch=main&style=for-the-badge&label=Deployment)](https://github.com/A-Generative-Slice/A-generative-slice/actions)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript_5.9-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

**We bridge the gap between imagination and reality, building elite digital products that define the future of business globally.**

🌐 **Live URL:** [https://agenerativeslice.com](https://agenerativeslice.com)

</div>

---

## 📖 About A Generative Slice

**A Generative Slice** is a friendly, hands-on digital product studio based in Chennai. We craft fast websites, helpful AI chatbots, and everyday business automations for growing companies.

### Core Philosophy
- **Zero Tech Jargon, Just Honest Help**: We speak plain English, not acronyms. You tell us what your business needs, and we make it happen.
- **100% Free Initial Consultations**: We sit down with you like friends to figure out the right solution before you spend a single rupee.
- **Modern, Reliable Craftsmanship**: Handcrafted with React 19, TypeScript, Vite, and Tailwind CSS so your software is lightning fast and never breaks.
- **Real Student Mentorship**: We give back by training students with real-world project skills, bridging the gap between college theory and actual tech careers.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5.9](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite 7](https://vite.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS & Autoprefixer |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) & [tsParticles](https://particles.js.org/) |
| **Icons** | [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **Deployment** | GitHub Actions & GitHub Pages |

---

## 📂 Project Structure

```
A-generative-slice/
├── .github/              # GitHub Actions deployment workflows
├── assets/               # Static design assets and brand imagery
├── public/               # Static public files, favicons, robots.txt
├── src/
│   ├── components/       # Reusable UI components (Navbar, Hero, Footer, Cards)
│   ├── pages/            # Route views (Home, Work, Services, Contact)
│   ├── styles/           # Global styles and Tailwind configuration
│   ├── App.tsx           # Main application routing and shell
│   └── main.tsx          # Application entry point
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML entry point
├── package.json          # Package manifest & scripts
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite build & plugin configuration
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or later
- **npm**: v9.0.0 or later

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/A-Generative-Slice/A-generative-slice.git
cd A-generative-slice

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Visit `http://localhost:5173` to explore the live development instance.

---

## 📜 Available Scripts

| Command | Action |
|---|---|
| `npm run dev` | Starts the local Vite development server with HMR |
| `npm run build` | Type-checks via `tsc -b` and builds optimized production bundles into `dist/` |
| `npm run preview` | Locally previews the production build |
| `npm run lint` | Runs ESLint across TypeScript and TSX files |
| `npm run deploy` | Builds the project and deploys to GitHub Pages via `gh-pages` |

---

## 🚢 CI/CD Deployment

This project uses **GitHub Actions** (`.github/workflows/deploy.yml`) to automatically compile and deploy the site upon push to the `main` branch. 

Manual deployment can also be triggered using:
```bash
npm run deploy
```

---

## 📄 License & Attribution

Copyright © 2026 **A Generative Slice**. All rights reserved.  
Maintained by the engineering team at [A Generative Slice](https://agenerativeslice.com).
