# DVLOP.in — Behaviors

## Scroll Behaviors

### Nav Scroll Shrink
- **Trigger:** Scroll position > 0 (any scroll)
- **State A (scroll = 0):**
  - height: 100px
  - border-bottom: `1px solid rgba(0, 0, 0, 0)` (transparent)
  - box-shadow: none
- **State B (scroll > 0):**
  - height: 85px
  - border-bottom: `1px solid oklab(0 0 0 / 0.05)` (border-current/5)
  - box-shadow: `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1)` (shadow-sm)
- **Transition:** `transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1)`
- **Implementation:** JS scroll listener + class toggle or inline style update

### GSAP Scroll-Triggered Animations
- **Class:** `gsap-fade-up`
- **Trigger:** IntersectionObserver (elements entering viewport)
- **Effect:** Fade-in + slide-up animation
- **Sections affected:** About, Services, CTA, Testimonials

### Smooth Scroll (Lenis)
- **Library:** Lenis smooth scroll
- **Indicator:** `<html class="lenis">`
- **Effect:** Smooth, inertia-based scrolling throughout the page

## Hover Behaviors

### Service Cards
- **Element:** Each service card (group)
- **Trigger:** hover
- **Effect:** Title `translate-x-2`, `transition-transform duration-300`

### Works Project Cards
- **Element:** Each project card (group)
- **Trigger:** hover
- **Effect:** Title `translate-x-1`, `transition-transform duration-300`

### Nav "Let's Talk" Button
- **Class:** `btn-pro`
- **Effect:** Hover state with background/color change

### Scroll-to-Top Button
- **Trigger:** hover
- **Effect:** Border changes from `border-black/10` to `border-black`

### Mobile Menu Button
- **Class:** `lg:hidden w-12 h-12 border border-current/10`
- **Hover:** `hover:bg-[var(--text-color)] hover:text-[var(--bg-color)]`

## Click Behaviors

### Mobile Menu Toggle
- **Trigger:** Click hamburger button
- **Effect:** Full-screen mobile menu overlay slides in

### Works Carousel Navigation
- **Buttons:** ← and →
- **Effect:** Horizontal scroll of project cards

### Testimonials Carousel Navigation
- **Buttons:** ← and →
- **Effect:** Switch between testimonial cards

### "WRITE A REVIEW" Button
- **Effect:** Opens review form/modal or navigates to review page

### CTA Buttons
- "Start Project ↗" → navigates to /contact
- "Explore Services" → navigates to /services
- "Full Portfolio" → navigates to /projects

## Color/Theme Transitions
- **Body:** `transition: background-color 0.5s, color 0.5s`
- Sections change background:
  - Hero: `var(--bg-color)` (cream)
  - About: transparent (inherits body bg)
  - Services: transparent
  - Works: `bg-current/5` (slightly darker overlay)
  - CTA: transparent with top border
  - Testimonials: transparent with top border
  - Footer: transparent with top border

## Responsive Behaviors

### Desktop (1440px)
- Full nav visible
- Hero: text-9xl heading
- Multi-column layouts
- Carousel shows multiple cards

### Tablet (768px, md:)
- Hero: text-7xl heading
- Grid layouts may reduce columns
- Nav still visible

### Mobile (390px)
- Hero: text-5xl heading
- Nav links hidden, hamburger menu shown
- "Let's Talk" button hidden in nav
- Single column layouts
- Carousel shows 1 card at a time
