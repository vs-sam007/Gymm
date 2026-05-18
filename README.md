# <p align="center"><img src="public/favicon.ico" width="48" height="48" alt="Iron Pulse Logo" /><br>IRON PULSE</p>
<p align="center"><b>— ELITE LUXURY FITNESS CLUB —</b></p>

<p align="center">
  <a href="https://iron-pulse-gymm.netlify.app"><img src="https://img.shields.io/badge/Live_Preview-iron--pulse--gymm.netlify.app-C9A84C?style=for-the-badge&logo=netlify&logoColor=black" alt="Live Demo" /></a>
  <img src="https://img.shields.io/badge/Next.js-v16.1.6-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js Version" />
  <img src="https://img.shields.io/badge/React-v19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Version" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS Version" />
</p>

---

<p align="center">
  <i>"THE HEIGHT OF PHYSICAL EXCELLENCE. FORGING ELITE LEGACIES."</i><br>
  An ultra-premium, editorial-grade wellness and fitness portal engineered for high-performance athletes and institutional members. Built with high-fidelity cinematic micro-animations, real-time biometrics rendering, and custom physical interaction loops.
</p>

---

## 🏛️ Architectural Pillars & Features

Iron Pulse is designed to emulate high-end architectural aesthetics, blending clean typography, glassmorphism, and performance-centric utility metrics.

### 1. Cinematic Scroll Narrative (`ScrollStory.tsx` & `Hero.tsx`)
*   **Peel-Reveal Typography**: GSAP-driven character-splitting animations that elegantly scroll into view.
*   **Scale-Sync Imagery**: Immersive slow-zoom cinematic backdrops (`/images/hero-gym-dark.jpg`) that dynamically scale and transition into border-rounded cards as you scroll down.
*   **Flicker Entry Sequences**: Initial page loads are introduced with a nostalgic, high-end light flicker simulation sequence utilizing GSAP timelines.

### 2. Kinetics Particle Engine (`ParticleBackground.tsx`)
*   An ultra-lightweight, high-performance **HTML5 Canvas Particle Emitter** configured to render real-time kinetics representing thermal combustion.
*   Uses mathematical alpha decay and upward velocity vectors operating on a screen-blend mode (`mix-blend-mode: screen`) at a custom gold/red hue.

### 3. Weekly Compendium Timetable (`ClassSchedule.tsx`)
*   An interactive weekly calendar segmented into specific athletic classifications: **Power**, **Kinetic**, and **Mobility**.
*   Built with smooth layout animations using Framer Motion's `<AnimatePresence>` for instantaneous, lag-free schedule shifts.

### 4. Smart Biometrics Ecosystem (`SmartFitness.tsx` & `LocationAndApp.tsx`)
*   An simulated live dashboard detailing core athletic telemetry, including:
    *   **96% Kinetic Recovery Score** using animated linear gradient indicator bars.
    *   Dynamic metrics grid covering **VO2 Max**, **HRV**, **Sleep Quality**, and **Physiological Load**.
    *   Instant bio-synchronization gate pass with interactive QR code scanning layout mockups.

### 5. Before/After Editorial Testimonial Slider (`Transformation.tsx`)
*   Interactive user success showcase matching elite athletic achievements (e.g. *14% Body Fat Loss*, *+8kg Lean Mass*, *Marathon PB - 2:48*).
*   Features premium editorial hover events that seamlessly transition image filters from muted grayscale to full high-contrast color.

### 6. Curated Faculty Directory (`Trainers.tsx`)
*   Profiles of the elite coaching practitioners detailing credentials (IFBB Elite, Performance Neurologist, PhD Sports Science).
*   Features high-performance smooth-shifting overlays that reveal advanced academic certifications upon hover.

### 7. Custom Immersive Experience Systems
*   **Magnetic Custom Cursor (`CustomCursor.tsx`)**: Customized cursor system consisting of a center gold dot and a trailing outer dynamic ring that adapts, expands, and alters scale on interactive actions.
*   **Lenis Smooth Scrolling (`SmoothScrollProvider.tsx`)**: High-fidelity inertial scrolling provider (`@studio-freight/lenis`) configured to eliminate browser scroll-stutter.
*   **Cinematic Film Grain (`globals.css` - `.grain`)**: A lightweight SVG noise-turbulence filter executing on an infinite looping CSS keyframe layout to create an elegant analog film aesthetic.

---

## 🎨 The Editorial Design System

Our custom tokens and styles reside in [globals.css](file:///c:/Users/hp/Documents/GitHub/Gymm/src/app/globals.css) and configure a bespoke Dark Luxury interface.

### 🌗 Color Palette
```ini
--color-background      = #080808  /* Pure Obsidian black */
--color-background-2    = #0D0D0D  /* Luxury card backdrop */
--color-foreground      = #F5F0E8  /* Editorial Sand White */
--color-gold            = #C9A84C  /* Classic Gold primary */
--color-gold-light      = #E2C97E  /* Bronze shimmer highlight */
--color-gold-dark       = #8B6914  /* Institutional Gold base */
--color-gold-dim        = rgba(201, 168, 76, 0.12)
```

### 🖋️ Typography Hierarchy
*   **Display Headers**: `Bebas Neue` (Variable, high tracking, extremely bold uppercase layout)
*   **Secondary Accents**: `Playfair Display` (Luxury serif, used for delicate italic highlights)
*   **Body Copy**: `Montserrat` (Clean, geometric, highly legible structural font)
*   **Data Metrics**: `Inter` (Precise, clear telemetry figures)

### 💎 Premium Layout Utilities
*   `.glass`: Neutral high-saturation backdrop blur card system (`rgba(20,20,20,0.6)` + `blur(24px)`).
*   `.glass-gold`: Custom luxury borders utilizing `var(--color-border-gold)` and dynamic inset shadows.
*   `.text-gold`: Bespoke shimmer gradient cycling through golden hues infinitely.

---

## 📂 Codebase Directory Architecture

```struct
Gymm/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout, Google Fonts integration & providers
│   │   ├── page.tsx           # Home page, compiling all core landing components
│   │   └── globals.css        # Custom theme definitions, grain, scrollbars & keyframes
│   ├── components/
│   │   ├── Navbar.tsx         # Adaptive blurred navbar & mobile overlay sidebar
│   │   ├── Hero.tsx           # GSAP peel-reveal header & slow-zoom showcase
│   │   ├── HorizontalTicker.tsx# Auto-sliding horizontal social-proof track
│   │   ├── ScrollStory.tsx    # Diagonal image clip-reveal scroll-peel layout
│   │   ├── Services.tsx       # Core program categories and luxury display cards
│   │   ├── SmartFitness.tsx   # Interactive telemetry dashboards & app simulator
│   │   ├── Pricing.tsx        # Tiered pricing plans with Monthly/Quarterly toggle
│   │   ├── Transformation.tsx # Grayscale-to-color interactive slider
│   │   ├── Trainers.tsx       # Faculty grid with professional portfolio animations
│   │   ├── ClassSchedule.tsx  # Dynamic hourly scheduling calendar system
│   │   ├── LocationAndApp.tsx # Dark inverted map integration & App Store badges
│   │   ├── CTA.tsx            # Premium subscription/enrollment footer section
│   │   ├── CustomCursor.tsx   # Magnetic screen-blend cursor tracking module
│   │   ├── SmoothScrollProvider.tsx # Lenis smooth-scroll provider
│   │   └── GlassCard.tsx      # Standardized glassmorphic container
│   └── lib/
│       └── utils.ts           # Class merger utilities (clsx + tailwind-merge)
├── public/                    # Cinematic assets, imagery & logo files
├── next.config.ts             # Framework configuration & compilation optimization
├── tailwind.config.ts         # Postcss structure settings
└── package.json               # Dependencies & scripts
```

---

## 🛠️ Developer Setup Playbook

Ensure you have [Node.js](https://nodejs.org) installed on your system.

### 1. Clone & Access the Directory
```bash
git clone https://github.com/your-username/Gymm.git
cd Gymm
```

### 2. Install Project Dependencies
Use `npm` to install the premium package list:
```bash
npm install
```

### 3. Spin Up the Local Development Server
Launch the compiler:
```bash
npm run dev
```
Open `http://localhost:3000` in your browser. The application supports Hot Module Replacement (HMR) and automatically updates as files change.

### 4. Build for Production Deployments
To compile optimized static bundles:
```bash
npm run build
```
This generates an optimized static compilation directory inside the `.next` workspace.

---

## ⚡ Technical Stack Matrix

| Module | Core Dependency | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `16.1.6` | Static Generation & Router Routing |
| **Core UI** | React | `19.2.3` | Dynamic Component Rendering |
| **Styling** | Tailwind CSS | `v4.0` | Utility-first Luxury Layout Design |
| **Motion Physics** | GSAP & ScrollTrigger | `^3.14.2` | Scroll Peels, Cinematic Flickers & Peels |
| **Micro-Interactions**| Framer Motion | `^12.34.0` | Layout Transitions & Presence Controls |
| **Scroll Engine** | Lenis | `^1.0.42` | High-fidelity Smooth Scroll Integration |
| **Visual Indicators** | Lucide React | `^0.563.0` | Vector UI Icons |
| **Development** | TypeScript | `^5` | Strict Static Typing Safeguards |

---

## 📄 License & Premium Note
This project is proprietary and customized to serve as a showcase template for elite fitness platforms. All custom visual assets, layout formulas, and copy structures are configured under standard developer usage permissions.

---
<p align="center">
  Made with relentless pursuit of excellence • Live on <a href="https://iron-pulse-gymm.netlify.app">iron-pulse-gymm.netlify.app</a>
</p>
