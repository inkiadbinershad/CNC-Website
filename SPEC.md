# CNC Machining Website - Technical Specification

## Project Overview
- **Project Name**: PrecisionWorks CNC
- **Type**: Industrial Manufacturing Website (React SPA)
- **Core Functionality**: Showcase CNC machining capabilities, display equipment, gallery, and RFQ system
- **Target Users**: Engineers, procurement managers, manufacturing buyers in aerospace/medical/defense sectors

---

## Tech Stack
- React 18 + Vite
- TailwindCSS 3.4
- shadcn/ui (Radix primitives)
- Framer Motion 11 (lightweight animations)
- Lucide React Icons
- React Dropzone

---

## Design System

### Color Palette
```
--bg-primary: #020617 (slate-950)
--bg-secondary: #0f172a (slate-900)
--bg-tertiary: #1e293b (slate-800)
--accent-cyan: #06b6d4 (cyan-500)
--accent-orange: #f97316 (orange-500)
--accent-blue: #3b82f6 (blue-500)
--text-primary: #f8fafc (slate-50)
--text-secondary: #94a3b8 (slate-400)
--border-subtle: rgba(148, 163, 184, 0.1)
```

### Typography
- **Headings**: "Rajdhani" (Google Fonts) - weights 500, 600, 700
- **Body**: "Inter" (Google Fonts) - weights 400, 500, 600
- **Hero Headline**: 64px / 72px line-height
- **Section Titles**: 48px / 56px line-height
- **Body Text**: 16px / 24px line-height

### Global Background
```css
/* Layered animated background */
background: 
  /* Layer 3: Noise texture */
  url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E"),
  /* Layer 1: Prism gradient */
  linear-gradient(135deg, #020617 0%, #0f172a 25%, #1e293b 50%, #0f172a 75%, #020617 100%);
/* Animate gradient with background-position shift */
```

### Aurora Effect
- Two radial gradients positioned at different points
- Colors: cyan (#06b6d4) and orange (#f97316)
- Blur: 150px - 300px
- Opacity: 0.15 - 0.25
- Animation: slow circular movement (20s-30s duration)

---

## Component Specifications

### 1. ClickSpark Component
- **Trigger**: onClick on document
- **Particles**: 8-12 small div elements
- **Colors**: cyan, orange, white (randomized)
- **Animation**: 
  - Spawn at cursor position
  - Expand outward in random directions
  - Fade out over 300ms
  - Scale from 1 to 0
- **Implementation**: CSS animations (no JS animation libraries)

### 2. Navbar Component
- **Position**: Fixed top, z-index 50
- **Height**: 72px
- **Background**: rgba(2, 6, 23, 0.8) with backdrop-blur(12px)
- **Border**: 1px bottom border with subtle gradient
- **Logo**: "PRECISIONWORKS" text in Rajdhani Bold
- **Menu Items**: Home, Capabilities, Machines, Industries, Gallery, RFQ, Contact
- **Hover Effect**: Animated underline (width expansion from center)
- **CTA Button**: "Request Quote" with glow effect

### 3. TiltCard / SpotlightCard Components
- **Base**: 17° max rotation (both X and Y axes)
- **Tilt Calculation**: Use mouse position relative to card center
- **Formula**: `rotateX = (y - cardHeight/2) / cardHeight * 17 * -1`
- **Formula**: `rotateY = (x - cardWidth/2) / cardWidth * 17`
- **Spotlight**: Radial gradient following cursor
- **Colors**: cyan to transparent, orange to transparent
- **Border Glow**: Gradient border on hover
- **Transition**: transform 0.3s ease-out

### 4. Hero Section
- **Height**: 100vh
- **Video**: 
  - Source: placeholder video URL (Pexels/free stock)
  - Opacity: 0.45
  - Object-fit: cover
- **Overlay**: Linear gradient from transparent to rgba(2,6,23,0.9) at bottom
- **Content**:
  - Headline: "Precision CNC Machining for Aerospace, Medical & Defense"
  - Subheadline: "Upload your CAD file and receive a manufacturing quote within 24 hours"
  - Two buttons: "Request Quote" (primary), "View Capabilities" (outline)
- **Animation**: Framer Motion - fadeInUp, stagger children by 0.1s

### 5. Industries Section
- **Grid**: 5 columns desktop, 2 tablet, 1 mobile
- **Cards**: 
  - Icon (Lucide)
  - Title
  - Description (2 lines)
- **Industries**: Aerospace, Medical Devices, Defense, Automotive, Robotics

### 6. Capabilities Section
- **Grid**: 5 columns desktop, 2 tablet, 1 mobile
- **Cards**: 
  - Icon
  - Title
  - Description
- **Capabilities**: CNC Milling, CNC Turning, 5-Axis Machining, Prototype Manufacturing, Production Runs

### 7. Machines Table
- **Columns**: Machine Name, Axis, Travel Dimensions, Tolerance
- **Data**:
  | Machine | Axis | Travel | Tolerance |
  |---------|------|--------|-----------|
  | Haas VF-2 | 3-Axis | 30" x 16" x 20" | ±0.0005" |
  | Mazak 5-Axis | 5-Axis | 20" x 20" x 20" | ±0.0002" |
  | DMG Mori DMU 50 | 5-Axis | 500 x 500 x 500mm | ±0.003mm |
  | Citizen Swiss L20 | 7-Axis | 20mm x 200mm | ±0.01mm |
- **Badge**: "Current Lead Time: 3-4 Weeks" (amber accent)

### 8. Gallery Section
- **Grid**: 4 columns desktop, 2 tablet, 1 mobile
- **Images**: 8 placeholder images
- **Hover**: Scale 1.05, z-index elevation
- **Modal**: Shows Material, Tolerance, Industry

### 9. Certifications Section
- **Layout**: Horizontal row of 4 badges
- **Badges**: ISO 9001, AS9100, ISO 13485, ITAR Registered
- **Hover**: Glow effect with scale 1.05

### 10. RFQ Form
- **Fields**:
  - Name (text, required)
  - Company (text, required)
  - Email (email, required)
  - Material (select): Aluminum, Steel, Titanium, Inconel, Brass, Plastic
  - Quantity (number, required)
  - Lead Time (select): 1 Week, 2 Weeks, 3-4 Weeks, 4+ Weeks
- **Dropzone**:
  - Accept: .STEP, .IGS, .PDF
  - Max file size: 50MB
  - Visual: Dashed border, icon, text

### 11. Floating Contact Button
- **Position**: Fixed bottom-right, 32px from edges
- **Buttons**: Call, WhatsApp
- **Animation**: Subtle pulse (scale 1 to 1.1, 2s infinite)

### 12. Footer
- **Columns**: Company Info, Quick Links, Machines, Industries, Contact
- **Background**: Slightly darker than main bg
- **Bottom**: Copyright + "PrecisionWorks CNC"

---

## Animations Specification

### Framer Motion Variants
```javascript
// Fade up
fadeInUp: {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

// Stagger children
staggerContainer: {
  animate: { transition: { staggerChildren: 0.1 } }
}
```

### Micro-interactions
- Buttons: box-shadow glow on hover (0.3s)
- Cards: translateY(-4px) on hover (0.2s)
- Images: scale(1.05) on hover (0.3s)
- Links: color transition (0.2s)

---

## Performance Optimizations
1. Lazy load images with loading="lazy"
2. Use poster attribute for video
3. Implement React.memo for card components
4. Use CSS transforms for animations (GPU accelerated)
5. Minimize Framer Motion usage (only hero and scroll reveals)
6. Use Tailwind's JIT compiler
7. Code split with React.lazy for sections

---

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## Dummy Media Sources

### Videos (Free Stock from Pexels)
- CNC machining: https://videos.pexels.com/video-files/2795750/2795750-hd_1920_1080_30fps.mp4
- Metal cutting: https://videos.pexels.com/video-files/8449247/8449247-hd_1920_1080_25fps.mp4

### Images (Placeholders via Placehold.co or Unsplash)
- Use placeholder service with industrial text
- Format: 800x600 for grid items, 1920x1080 for hero

---

## Project Structure
```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── dialog.tsx
│   ├── Navbar.tsx
│   ├── TiltCard.tsx
│   ├── SpotlightCard.tsx
│   ├── ClickSpark.tsx
│   ├── FloatingContact.tsx
│   └── AnimatedBackground.tsx
├── sections/
│   ├── Hero.tsx
│   ├── Industries.tsx
│   ├── Capabilities.tsx
│   ├── Machines.tsx
│   ├── Gallery.tsx
│   ├── Certifications.tsx
│   ├── RFQ.tsx
│   └── Footer.tsx
├── lib/
│   └── utils.ts
├── App.tsx
├── main.tsx
└── index.css
```

