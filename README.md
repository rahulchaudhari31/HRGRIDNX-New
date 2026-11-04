# HRGridNX

**Every person. Every role. One grid.**

HRGridNX is the public marketing website for a role-based HR management platform. It presents a connected HR experience built around six roles and nine core modules — employees, departments, leave, attendance, tasks, payroll, expenses, documents, and reports.

The site is a hand-built React single-page application with a distinctive grid-themed visual system. Every product visual is composed from CSS, SVG, and divs rather than screenshots or stock photography.

- **Live website:** [https://hrgridnx.com](https://hrgridnx.com)
- **GitHub repository:** [https://github.com/rahulchaudhari31/HRGRIDNX-New](https://github.com/rahulchaudhari31/HRGRIDNX-New)

---

## ✨ Features

- **Five routed pages** — Home, Features, Roles, About, and Contact, plus a dedicated 404 page.
- **Role-based product story** — presents six roles (Admin, HR Manager, Department Head, Finance Manager, Team Leader, Employee) and nine connected HR modules.
- **Lazy-loaded routes** — page bundles are loaded on demand with React `lazy` and `Suspense`.
- **Per-route metadata** — document title, description, and Open Graph/Twitter tags update on navigation.
- **Motion with accessibility in mind** — Framer Motion reveals and transitions honour `prefers-reduced-motion` through `MotionConfig`.
- **Responsive navigation** — scroll-aware header with an animated mobile menu.
- **Custom design system** — Tailwind tokens for `paper`, `ink`, `deep`, `mint`, `coral`, and `hairline`, plus signature 1px grid-line utilities.
- **Centralised content** — all site copy and structured data live in `src/lib/content.js`.
- **Client-side contact form** — validated enquiry form with an in-page success state (no backend submission).
- **Accessibility essentials** — skip-to-content link, visible focus rings, and semantic heading structure.

---

## 🛠️ Tech Stack

| Category | Technology | Version |
| --- | --- | --- |
| UI framework | React | `^19.2.8` |
| DOM renderer | React DOM | `^19.2.8` |
| Routing | React Router DOM | `^7.18.4` |
| Build tool | Vite | `^8.3.0` |
| React plugin | `@vitejs/plugin-react` | `^6.1.1` |
| Styling | Tailwind CSS | `^3.4.19` |
| CSS processing | PostCSS + Autoprefixer | `^8.5.28` / `^10.6.1` |
| Animation | Framer Motion | `^13.4.0` |
| Icons | lucide-react | `^1.47.0` |
| Linting | Oxlint | `^1.81.0` |
| Language | JavaScript (ES Modules, JSX) | — |

---

## 📁 Project Structure

```text
HRGRIDNX-New/
├── public/                     Static assets: favicons, logo, and Open Graph image
├── src/
│   ├── components/
│   │   ├── common/             Shared page blocks: Cta, PageHero, GridBackground
│   │   ├── layout/             Navbar, Footer, ScrollToTop
│   │   ├── ui/                 Button, Badge, Container, Logo, Reveal, SectionHeading
│   │   └── *.jsx               Active top-level components used by routed pages
│   ├── lib/
│   │   ├── content.js          All site copy, navigation, roles, modules, and pricing data
│   │   ├── icons.jsx           Icon indirection over lucide-react
│   │   ├── icons-map.js        Icon name mapping
│   │   └── cn.js               Small classname joiner
│   ├── pages/
│   │   ├── HomePage.jsx        Route entry for /
│   │   ├── FeaturesPage.jsx    Route entry for /features
│   │   ├── RolesPage.jsx       Route entry for /roles
│   │   ├── AboutPage.jsx       Route entry for /about
│   │   ├── ContactPage.jsx     Route entry for /contact
│   │   ├── NotFoundPage.jsx    Route entry for unknown paths
│   │   ├── PricingPage.jsx     Pricing composition (not currently routed)
│   │   ├── Home/               Home page composition and section components
│   │   ├── Features/           Features page composition and module catalogue
│   │   ├── Roles/              Roles page composition and role details
│   │   ├── About/              About page composition, mission, values, timeline
│   │   ├── Contact/            Contact page composition and enquiry form
│   │   ├── Pricing/            Pricing plans and billing toggle components
│   │   └── NotFound/           404 page composition
│   ├── sections/
│   │   ├── home/               Hero, Portals, Modules, Stats, Timeline, Security,
│   │   │                       Testimonials, and TrustStrip sections
│   │   ├── features/           ModuleCatalog section
│   │   ├── roles/              RoleDetails section
│   │   ├── Cta.jsx             Shared call-to-action section
│   │   └── PageHero.jsx        Shared inner-page hero
│   ├── App.jsx                 Router, lazy routes, and per-route meta handling
│   ├── main.jsx                React application entry point
│   └── index.css               Tailwind layers, grid utilities, and accessibility rules
├── index.html                  HTML shell, SEO/Open Graph meta, and web fonts
├── vite.config.js              Vite configuration with the React plugin
├── tailwind.config.js          Design tokens, fonts, shadows, and letter spacing
├── postcss.config.js           Tailwind CSS and Autoprefixer plugins
├── .oxlintrc.json              Oxlint configuration
├── package.json                Scripts and dependencies
└── README.md                   Project documentation
```

---

## 🚀 Getting Started

### 📋 Prerequisites

- **Node.js** `20.19+` or `22.12+` (required by Vite 8)
- **npm** (bundled with Node.js)

### 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/rahulchaudhari31/HRGRIDNX-New.git
cd HRGRIDNX-New
npm install
```

### ▶️ Run the Development Server

```bash
npm run dev
```

Vite starts the development server at [http://localhost:5173](http://localhost:5173) by default.

### 🏗️ Build for Production

```bash
npm run build
```

The production-ready static files are generated in the `dist/` directory.

### 👀 Preview the Production Build

```bash
npm run preview
```

This serves the contents of `dist/` locally so you can verify the production build.

### 🧹 Lint the Code

```bash
npm run lint
```

Linting is powered by Oxlint using the rules defined in `.oxlintrc.json`.

---

## 🧑‍💻 Using OpenCode in VS Code

This project can be developed with OpenCode directly inside VS Code.

1. Install the **OpenCode** extension for VS Code.
2. Open this project folder in VS Code.
3. Launch OpenCode from the editor or run the following in the integrated terminal:

   ```bash
   opencode
   ```

4. Use the assistant to explore the codebase, review changes, and run project commands.

No project-specific OpenCode configuration is required.

---

## 📄 License

This project is proprietary. © 2026 HRGridNX. All rights reserved.

No license file is included in this repository.
