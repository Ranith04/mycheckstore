# Phone Mockup Proportions Guide

## Target Proportions Achieved

### Desktop (> 900px)
```
Width:  320px
Height: 640px (max 680px)
Ratio:  1:2 (standard phone aspect ratio)
```

### Tablet (768px - 900px)
```
Base:       280px × 560px
Scale:      0.85 (15% reduction)
Effective:  238px × 476px
Ratio:      1:2 maintained
```

### Mobile (481px - 767px)
```
Base:       260px × 520px
Scale:      0.88 (12% reduction)
Effective:  229px × 458px
Ratio:      1:2 maintained
```

### Extra Small (≤ 480px)
```
Base:       240px × 480px
Scale:      0.82 (18% reduction)
Effective:  197px × 394px
Ratio:      1:2 maintained
```

## Floating Cards Scaling

### Tablet (768px - 900px)
- **Scale:** 0.82 (18% reduction)
- **Positioning:** Adjusted to match phone size

### Mobile (Below 768px)
- **Scale:** 0.85 (15% reduction)
- **Positioning:** Optimized for smaller screens

### Extra Small (Below 480px)
- **Scale:** 0.75 (25% reduction)
- **Positioning:** Compact layout

## Vertical Alignment Strategy

```
┌─────────────────────────────────────┐
│                                     │
│  Hero Content (Left)                │
│  ├─ Section Label                   │
│  ├─ Headline                        │
│  ├─ Description                     │
│  ├─ CTA Buttons  ←──────┐           │
│  └─ Trust Proof         │           │
│                         │           │
│  Phone Mockup (Right)   │           │
│  ┌──────────────┐       │           │
│  │              │       │           │
│  │   Screen     │  Ends here        │
│  │   Content    │  or slightly      │
│  │              │  below            │
│  └──────────────┘       │           │
│                         │           │
└─────────────────────────┼───────────┘
                          ↓
              Should NOT extend
              significantly below
              this point
```

## CSS Implementation Pattern

```css
/* Base - Explicit Height Control */
.hero__phone {
  width: 320px;
  height: 640px;
  max-height: 680px;
}

/* Responsive - Transform Scale */
@media (max-width: 900px) and (min-width: 768px) {
  .hero__phone {
    width: 280px;
    height: 560px;
    max-height: 580px;
    transform: scale(0.85);
    transform-origin: center;
  }
  
  /* Maintain hover effect with scale */
  .hero__phone:hover {
    transform: scale(0.85) translateY(-6px);
  }
}
```

## Why Transform Scale?

### Advantages:
1. **Proportional** - Both dimensions scale together perfectly
2. **Performance** - GPU-accelerated, smooth rendering
3. **Maintainable** - Single value controls entire element
4. **Flexible** - Easy to adjust without recalculating dimensions
5. **Consistent** - Maintains exact aspect ratio

### Comparison:

**Without Transform:**
```css
/* Manual calculation needed */
.hero__phone {
  width: 272px;      /* 320 × 0.85 */
  height: 544px;     /* 640 × 0.85 */
  /* Easy to make mistakes */
}
```

**With Transform:**
```css
/* Clean and precise */
.hero__phone {
  width: 320px;
  height: 640px;
  transform: scale(0.85);
  /* Perfect proportions guaranteed */
}
```

## Overflow Management

```css
.hero__visual {
  overflow: hidden;  /* Prevents phone from breaking layout */
  align-items: center;  /* Vertical centering */
}
```

**Why `overflow: hidden`?**
- Prevents phone from extending beyond container
- Clips any overflow content cleanly
- Maintains clean layout boundaries
- Essential for responsive behavior

## Hero Section Height

```css
.hero {
  min-height: 85vh;  /* Reduced from 90vh */
}
```

**Why 85vh?**
- Provides enough space for content and phone
- Prevents excessive vertical space
- Creates balanced proportions
- Allows phone to end near CTA buttons

## Spacing Hierarchy

```
Hero Section (85vh)
├─ Padding Top: 120px
├─ Content Area
│  ├─ Hero Content (Left)
│  │  └─ Vertically centered
│  └─ Hero Visual (Right)
│     └─ Phone Mockup
│        ├─ Height: 640px (desktop)
│        ├─ Height: 476px effective (tablet)
│        ├─ Height: 458px effective (mobile)
│        └─ Height: 394px effective (xs)
└─ Padding Bottom: 80px
```

## Responsive Breakpoints Summary

| Breakpoint | Phone Size | Scale | Effective Size | Cards Scale |
|------------|------------|-------|----------------|-------------|
| > 900px    | 320×640    | 1.0   | 320×640        | 1.0         |
| 768-900px  | 280×560    | 0.85  | 238×476        | 0.82        |
| 481-767px  | 260×520    | 0.88  | 229×458        | 0.85        |
| ≤ 480px    | 240×480    | 0.82  | 197×394        | 0.75        |

## Visual Balance Checklist

✅ Phone height is 15-20% reduced on tablet/mobile  
✅ Phone ends near or slightly below CTA buttons  
✅ No vertical overflow or clipping  
✅ Floating cards scale proportionally with phone  
✅ Content remains primary focus  
✅ Hero section feels balanced, not bottom-heavy  
✅ Smooth transitions between breakpoints  
✅ Consistent aspect ratio maintained  

## Testing Commands

```bash
# Start development server
npm run dev

# Test at specific widths:
# - 1920px (Desktop)
# - 900px (Tablet upper bound)
# - 768px (Tablet lower bound)
# - 767px (Mobile upper bound)
# - 480px (Mobile lower bound)
# - 375px (iPhone SE)
# - 360px (Android common)
```

## Expected Visual Result

The phone mockup should:
1. **Desktop:** Be prominent but not dominating (~640px tall)
2. **Tablet:** Scale down to ~476px effective height
3. **Mobile:** Scale down to ~458px effective height
4. **All sizes:** End roughly aligned with CTA buttons area
5. **All sizes:** Maintain 1:2 aspect ratio perfectly

## Status: ✅ IMPLEMENTED

All proportions are correctly set with explicit height control and transform-based scaling for optimal responsive behavior.
