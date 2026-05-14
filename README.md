# Gushwork Web Dev Assignment — Submission

**Candidate:** Santhiya  
**Assignment:** Responsive Product Page — Mangalam HDPE Pipes  
**Tech Stack:** Vanilla HTML5 · CSS3 · JavaScript (ES6+) — No frameworks

---

## 📁 File Structure

```
santhiya/
├── index.html          # Main HTML file (semantic structure)
├── styles.css          # All styles — layout, components, responsive
├── script.js           # JavaScript — sticky header, carousel, zoom, FAQ
├── assets/
│   ├── img_1.jpg       # Main product image (hero)
│   ├── img_2.jpg       # Thumbnail 1
│   ├── img_3.jpg       # Thumbnail 2
│   ├── img_4.jpg       # Thumbnail 3
│   ├── img_5.jpg       # Thumbnail 4
│   ├── img_6.jpg       # Thumbnail 5
│   ├── img_7.jpg       # Thumbnail 6
│   ├── img_8.jpg       # Applications — Fishnet
│   ├── img_9.jpg       # Applications — card 2
│   ├── img_10.jpg      # Applications — card 3
│   ├── img_11.jpg      # Applications — card 4
│   ├── img_12.jpg      # Process section image
│   ├── img_13.jpg      # Portfolio — HDPE Fittings / Installation
│   ├── img_14.jpg      # Portfolio — PE-RT Heating Pipes
│   └── in.png          # India flag icon (specs table)
└── README.md           # This file
```

---

## ✅ Features Implemented

### 1. Sticky Header (Scroll-Triggered)
- The sticky header (`#stickyHeader`) is **fixed-positioned off-screen** (`top: -100px`) by default.
- A `scroll` event listener in `script.js` watches `window.scrollY`.
- Once the user scrolls past **300px** (beyond the first fold), the class `visible` is added, animating the header into view with a CSS `transition: top 0.4s ease-in-out`.
- Scrolling back up removes the class and the header slides out — no layout shift.
- The main header (`#mainHeader`) stays in the normal document flow for the first fold.

### 2. Image Carousel with Zoom
**Carousel:**
- 6 thumbnail images rendered in a horizontally-scrollable row.
- Clicking any thumbnail swaps the main image (`#mainImage`) to the corresponding full-size asset.
- Prev / Next arrow buttons (`#prevBtn`, `#nextBtn`) cycle through images with index wrapping (0 → last, last → 0).
- Active thumbnail is highlighted with a blue border via the `.active` CSS class.

**Zoom (Desktop Only):**
- On `mouseenter` over the main image container, a semi-transparent **zoom lens** (`#zoomLens`) appears and follows the cursor.
- A **zoom result box** (`#zoomResult`) renders to the right of the image, displaying the image at **2.5× magnification** using `background-size` and `background-position` calculations.
- The lens dimensions are dynamically computed from the result-box size divided by the zoom ratio, ensuring they always match.
- On `mouseleave`, both elements fade out via CSS `opacity` transitions.
- On screens ≤ 900px the zoom is **hidden** (standard UX practice for touch devices).

### 3. FAQ Accordion
- Click any question to expand its answer; clicking again collapses it.
- Only one answer is open at a time (accordion pattern).
- The chevron icon rotates on open/close via class swap.

### 4. Mobile Navigation
- On screens ≤ 768px the main nav collapses; a hamburger button toggles `.active` on the nav to show/hide it as a dropdown.
- Works independently in both the sticky header and the main header.

---

## 📱 Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| `≤ 1200px` | Container padding adjusts |
| `≤ 900px` | Product grid → single column; zoom hidden; process section stacks; contact form stacks |
| `≤ 768px` | Nav collapses to hamburger; arrow buttons resize |
| `≤ 600px` | Full mobile layout — all grids become 1-column; tech specs table transforms to 2-column card grid; padding reduced; testimonial/app cards become 80–85vw wide for swipeable scroll |

---

## 🌐 Browser Compatibility

Tested and compatible with:
- Google Chrome 120+
- Mozilla Firefox 121+
- Safari 17+
- Microsoft Edge 120+

CSS features used: Custom Properties, Flexbox, CSS Grid, `aspect-ratio`, `position: sticky/fixed`, CSS transitions — all widely supported.

---

## ⚡ Performance Notes

- No JavaScript frameworks or libraries — zero bundle overhead.
- Images are loaded natively; no lazy-loading script needed for above-the-fold assets.
- CSS transitions are GPU-composited (`opacity`, `transform`) to avoid layout repaints.
- Scrollbar hidden on overflow carousels for a clean UX without extra JS.

---

## 🚀 How to Run

No build step required. Simply open `index.html` in any modern browser:

```bash
# Option 1: Open directly
open index.html

# Option 2: Local server (recommended to avoid CORS on assets)
npx serve .
# or
python3 -m http.server 8080
```

Then visit `http://localhost:8080` (or `8000` for Python).

---

## 🔑 Key Code Comments

All three files (`index.html`, `styles.css`, `script.js`) are sectioned with clear block comments:

- **HTML** — sections marked: `Sticky Header`, `Main Header`, `Product Gallery`, `Product Details`, `Tech Specs`, `Features`, `Applications`, `Process`, `Testimonials`, `FAQ`, `Portfolio`, `Resources`, `Contact`, `Footer`
- **CSS** — sections separated by `/* ========== SECTION NAME ========== */` headings
- **JS** — four numbered sections: `1. STICKY HEADER LOGIC`, `1.5. MOBILE MENU LOGIC`, `2. IMAGE CAROUSEL LOGIC`, `3. IMAGE ZOOM LOGIC`, `4. FAQ ACCORDION LOGIC`
