# DVLOP.in — Page Topology

## Overview
- **URL:** https://www.dvlop.in/
- **Title:** Web Development Company in Gujarat | DVLOP Technologies
- **Theme:** Light (cream/beige background `#F3F4E5`), with dark text
- **Smooth Scroll:** Lenis (`.lenis` class on `<html>`)
- **Fonts:** 
  - **Author** (from Fontshare) — headings (weights: 200, 300, 400, 500)
  - **General Sans** (from Fontshare) — body text (weights: 400, 500, 600, 700)

## Global CSS Variables
- `--bg-color`: `rgb(243, 244, 229)` (cream/beige)
- `--text-color`: `rgb(0, 0, 0)` (black)
- `--selection-bg`: selection background
- `--selection-text`: selection text color

## Page Layout
```
<body>
  <div id="root">
    <HEADER> — Fixed nav (z-100)
    <DIV> — Main content wrapper (min-h-screen)
      <SECTION 0> — sr-only H1
      <SECTION 1> — Hero
      <SECTION 2> — About
      <SECTION 3> — Services
      <SECTION 4> — Works/Portfolio
      <SECTION 5> — CTA
      <SECTION 6> — Testimonials
    </DIV>
    <FOOTER>
    <BUTTON> — Scroll-to-top (fixed bottom-right, z-9999)
  </div>
</body>
```

## Sections Detail

### 0. Fixed Header/Nav
- **Position:** `fixed top-0 left-0 w-full z-[100]`
- **Height:** 100px (default) → 85px (after scroll)
- **Background:** `var(--bg-color)` (cream)
- **Border:** `border-transparent` → `border-current/5` + `shadow-sm` (after scroll)
- **Transition:** `transition-all duration-500`
- **Contents:**
  - Logo (V.svg) on left
  - Nav links: Home, About, Services, Works, Careers, Clients
  - "Let's Talk" button (hidden on mobile)
  - Hamburger menu button (mobile)

### 1. Hero Section
- **Class:** `relative min-h-screen pt-[120px] overflow-hidden bg-[var(--bg-color)] flex flex-col justify-center`
- **Interaction model:** static (with scroll-triggered fade-up animations via GSAP)
- **Content:**
  - H1: "Design.Develop.Deploy." (text-5xl md:text-7xl lg:text-9xl, font-light, tracking-[-0.03em], leading-[0.92])
  - Subtitle: "Experience the perfect blend of strategy, innovation, and design..."
  - CTA buttons: "Start Project ↗" + "Explore Services"
  - Trust bar: "Trusted tech partners delivering proven results since 2022."
  - Feature cards: Expert Engineering, AI Integration, Future-Proof, Premium Design
  - Floating stat cards: "900+ Happy Clients", "Since 2022"

### 2. About Section
- **Class:** `container-wide py-24 relative z-10`
- **Padding:** 96px top/bottom, 48px left/right
- **Interaction model:** static with GSAP fade-up
- **Content:**
  - Eyebrow: "Achievements"
  - H2: "AboutCompany" (text-5xl md:text-7xl, font-medium, tracking-tighter)
  - Description text about DVLOP Technologies
  - Stats grid with images (hero_card_clients.png, hero_card_years.png)

### 3. Services Section
- **Class:** `container-wide py-32 relative z-10`
- **Padding:** 128px top/bottom, 48px left/right
- **Interaction model:** static with GSAP fade-up
- **Content:**
  - Eyebrow: "Our Expertise"
  - H2: "Our Services" (text-5xl md:text-7xl)
  - Description: "We deploy cross-functional teams..."
  - "Explore All Services" link
  - Service cards (6 items):
    1. Frontend Project — "Responsive React/Vue based web application..."
    2. Full Stack App — "Complete MERN/Python Application..."
    3. AI/ML Model — "Python-based Machine Learning model..."
    4. Custom Web App — "Scalable, production-ready web app..."
    5. E-Commerce Store — "Full-featured online store..."
    6. Digital Marketing
  - Each card has hover: `group-hover:translate-x-2 transition-transform duration-300`

### 4. Works/Portfolio Section
- **Class:** `py-32 bg-current/5 relative overflow-hidden`
- **Background:** `oklab(0 0 0 / 0.05)` (slightly darker than body)
- **Padding:** 128px top/bottom
- **Interaction model:** scroll-driven carousel with left/right navigation buttons
- **Content:**
  - Eyebrow: "Case Studies"
  - H2: "Our SelectedWork"
  - "Full Portfolio" link
  - Carousel with navigation buttons (← →)
  - Project cards:
    1. KALAPI FASHION — MERN stack e-commerce
    2. Ashion — Python FastAPI e-commerce
    3. Prysmor Website — Complete Modernization
    4. CCMS — Cyber Cafe Management System
  - Each card: image (from Cloudinary), title, description, tag

### 5. CTA Section
- **Class:** `container-wide py-32 border-t border-current/10 gsap-fade-up`
- **Padding:** 128px top/bottom, 48px left/right
- **Border:** top border `border-current/10`
- **Interaction model:** static with GSAP fade-up
- **Content:**
  - Eyebrow: "Get In Touch"
  - H2: "Have A Project ToCollaborate On?" (text-4xl sm:text-5xl md:text-7xl lg:text-8xl)
  - Description: "Get A Quote — If you think we can do..."
  - CTA button

### 6. Testimonials Section
- **Class:** `container-wide py-32 border-t border-current/10 overflow-hidden`
- **Padding:** 128px top/bottom, 48px left/right
- **Interaction model:** click-driven carousel with ← → buttons + "WRITE A REVIEW" button
- **Content:**
  - Eyebrow: "Testimonials"
  - H2: "Trusted By"
  - Carousel navigation: ← → buttons + "WRITE A REVIEW" button
  - Testimonial cards with quotes and author names:
    1. Nirzari Patel
    2. Pratham Bhatt
    3. Shreya Patel
    4. Harshitasindhi

### 7. Footer
- **Class:** `py-32 border-t border-current/10`
- **Padding:** 128px top/bottom
- **Content:**
  - Tagline: "Building The Future, One Line Of Code At A Time."
  - "FOLLOW US" — LinkedIn, Instagram links
  - "CONTACT" — email, phone numbers
  - "Quick links" — About, Why Us, Process, Careers, Contact
  - "Legal" — Privacy, Terms
  - Copyright: "© 2026 DVLOP Technologies"

### 8. Scroll-to-Top Button
- **Position:** `fixed bottom-8 right-8 z-[9999]`
- **Size:** 54x54px, p-4
- **Background:** `var(--bg-color)` (cream)
- **Border:** `border-black/10` → `border-black` on hover

## Behaviors

### Nav Scroll Behavior
- **Trigger:** Scroll position > 0
- **State A (top):** height: 100px, border-bottom: transparent, no shadow
- **State B (scrolled):** height: 85px, border-bottom: `border-current/5`, shadow-sm
- **Transition:** `transition-all duration-500`

### GSAP Animations
- Sections use `gsap-fade-up` class for scroll-triggered fade-in animations
- Elements animate into view when entering viewport

### Body Theme Transition
- Body has `transition: background-color 0.5s, color 0.5s` — sections may change bg/text colors

### Service Card Hover
- **Trigger:** hover on card group
- **Effect:** `translate-x-2` on title, `transition-transform duration-300`

### Works Carousel
- **Interaction model:** scroll-driven or click-driven carousel (← → buttons)
- Cards scroll horizontally

### Testimonials Carousel
- **Interaction model:** click-driven carousel (← → buttons)
- Cards slide between testimonials

## Responsive Breakpoints
- **Desktop:** 1440px
- **Tablet:** 768px (md:)
- **Mobile:** 390px
- Nav links hide on mobile, hamburger menu appears
- Typography scales: text-5xl → text-7xl → text-9xl for hero
- Grid layouts stack on mobile
