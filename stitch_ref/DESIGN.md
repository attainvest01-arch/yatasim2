# Design System Document

## 1. Overview & Creative North Star: "The Kinetic Academy"

This design system is engineered to transform educational digital interfaces into vibrant, high-end editorial experiences. Our Creative North Star is **"The Kinetic Academy"**—a philosophy where learning is never static. 

While most educational platforms settle for rigid, boxed grids, this system embraces **Intentional Asymmetry** and **Tonal Depth**. We move away from the "template" look by using overlapping elements, sophisticated layering, and a typography scale that feels both authoritative and joyful. The goal is to create a space that feels like a premium digital magazine: breathing room, bold color blocks, and a sense of constant, upward motion inspired by the "soaring figures" in the brand's iconography.

---

## 2. Colors: Tonal Energy & The "No-Line" Rule

The palette is a sophisticated extraction of the brand’s core DNA: Magenta (`primary`), Deep Blue (`secondary`), and Golden Yellow (`tertiary`).

### The "No-Line" Rule
To achieve a high-end feel, **1px solid borders are strictly prohibited** for sectioning or card definition. Boundaries must be defined solely through:
*   **Background Shifts:** Contrast a `surface-container-low` section against a `surface` background.
*   **Tonal Transitions:** Use soft, value-based shifts to separate content.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine, matte paper.
*   **Base:** `surface` (#f4f7fc) is your canvas.
*   **Nesting:** Place a `surface-container-lowest` (#ffffff) card on top of a `surface-container` (#e4e8ef) background to create natural, soft definition. This "stacking" creates depth without clutter.

### Signature Textures & Glassmorphism
*   **The Soul Gradient:** Main CTAs and Hero backgrounds should use a subtle linear gradient transitioning from `primary` (#b7004d) to `primary-container` (#ff7294). This adds "soul" and prevents the flatness common in budget apps.
*   **Glass Elements:** For floating navigation or modal overlays, use `surface-container-lowest` at 80% opacity with a `20px` backdrop-blur. This integrates the component into the environment rather than "pasting" it on top.

---

## 3. Typography: Professional Playfulness

We use **Plus Jakarta Sans** as our sole typeface. It provides a modern, rounded aesthetic that feels friendly for students but remains sharp enough for professional educators.

*   **Display Scales (lg, md, sm):** Used for "Big Ideas" and hero headers. These should use tight letter-spacing (-0.02em) to feel editorial and high-end.
*   **Headline & Title Scales:** These act as the anchors of your layout. Use `headline-lg` (2rem) for major section starts to command attention.
*   **Body (lg, md, sm):** Optimized for readability. Use `body-lg` (1rem) for general content to ensure the experience feels accessible and spacious.
*   **Labels:** Reserved for utility. Use `label-md` in uppercase with slight letter-spacing (+0.05em) when used for category tags.

The hierarchy is designed to be "Top-Heavy," meaning we favor large, bold headers and generous white space around body text to prevent "text-heavy" fatigue.

---

## 4. Elevation & Depth: The Layering Principle

We reject traditional drop-shadows. Depth is achieved through **Tonal Layering** and light physics.

*   **The Layering Principle:** Depth is "stacked," not "shadowed." An element’s importance is indicated by how much it "lifts" from the base surface using the `surface-container` tiers.
*   **Ambient Shadows:** If a floating element (like a FAB) is required, use a shadow with a `48px` blur and `6%` opacity. The shadow color must be a tinted version of `on-surface` (#2b2f34), creating a natural, ambient glow rather than a grey smudge.
*   **The "Ghost Border" Fallback:** If a container sits on a background of identical color and requires definition, use a "Ghost Border": the `outline-variant` token at **15% opacity**. Never use 100% opaque borders.
*   **Glassmorphism:** Use semi-transparent layers for elements that should feel light and "floating" above the kinetic background energy.

---

## 5. Components

### Buttons & Chips
*   **Primary Button:** Uses the "Soul Gradient" (`primary` to `primary-container`). Roundedness: `full` (9999px). This conveys energy and action.
*   **Secondary/Tertiary:** No background. Use `primary` text and a "Ghost Border" for secondary; text-only for tertiary.
*   **Chips:** Selection chips use `secondary-container` (#add6ff) to provide a cooling contrast to the energetic primary magenta.

### Cards & Lists
*   **The "No-Divider" Rule:** Vertical white space from the Spacing Scale (specifically `8` or `10`) must be used to separate list items. 
*   **Cards:** Use `md` (1.5rem) or `lg` (2rem) rounded corners. Content inside cards should never be crowded; use a minimum internal padding of `spacing.6` (1.5rem).

### Input Fields
*   **Style:** Use `surface-container-low` as the field background. No borders. On focus, transition the background to `surface-container-lowest` and add a `2px` "Ghost Border" in `primary`.

### Navigation Rails (Context Specific)
Since this is an educational platform, use a vertical navigation rail on larger screens to maximize vertical reading space. Use the `secondary` color for active states to distinguish "where I am" from "what I can do" (Primary).

---

## 6. Do’s and Don’ts

### Do
*   **DO** use the `lg` (2rem) spacing token between sections to allow the design to breathe.
*   **DO** use "Primary-Dim" (#a00043) for text links on light surfaces to ensure AAA accessibility.
*   **DO** overlap images with card containers slightly to create a dynamic, "un-boxed" layout.

### Don’t
*   **DON’T** use 1px solid black or high-contrast grey borders. It breaks the premium "matte paper" feel.
*   **DON’T** use "Standard" 4px or 8px corners. Only use the system scale: `sm` (0.5rem) for small UI like checkboxes, and `md` to `xl` for containers.
*   **DON’T** use more than three levels of surface nesting. Keep the hierarchy clean and intentional.