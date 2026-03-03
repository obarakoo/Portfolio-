# Task Plan

## Goal
Implement Phase 1 to Phase 5 improvements to the Portfolio project. 

## Phases

### Phase 1: Structural & Debugging Fixes
- [ ] Fix Container Overflow (.card or .project-item): Remove fixed height values, use min-height instead, add top/bottom padding 24px.
- [ ] Standardize Tech Stack Icons: wrap HTML, CSS, JS in a flex container, set height: 24px.
- [x] Refine Typography: "Case Studies & Projects" uses `text-wrap: balance`.

### Phase 2: Responsive Button Logic
- [ ] Mobile navigation button (`.btn-mobile-nav`) shown only on mobile (<768px). Desktop only buttons hidden on mobile.

### Phase 3: Visual Interface Overhaul (Layered Card Design)
- [ ] Add background image inside each card, `background-size: cover`, `background-position: center`.
- [ ] Glass & Gradient Overlay: `linear-gradient(to top, rgba(0,0,0,0.9), transparent)` over the image.
- [ ] Hover Interaction: `transform: scale(1.05)` on the image.

### Phase 4: Grid & Layout Strategy
- [ ] Desktop (>1024px): 2 or 3 columns (`grid-template-columns: 1fr 1fr;`)
- [ ] Tablet (768px - 1024px): 2 columns, reduced gap.
- [ ] Mobile (<767px): 1 column, stack vertically, increase height.

### Phase 5: Quality Assurance (QA)
- [ ] Interaction Check: "Click to expand" text is vertically aligned, no overlap.
- [ ] Cross-browser check / asset optimization check (WebP).
