# Framer Motion Guidelines

Use Framer Motion for small, purposeful transitions that reinforce the premium experience. Motion must never delay content or make the site feel like a template demo.

## Approved motion patterns
- Hero text: subtle fade-in plus 8–14 px vertical movement, 400–650 ms, once on initial view.
- Section reveal: fade-in plus 10–16 px movement, 350–550 ms, triggered when entering view; avoid cascading every paragraph.
- Image hover: scale from 1 to at most 1.025–1.03 over 450–700 ms, with overflow clipped.
- Buttons: 120–180 ms color/border transition; optional 1–2 px movement.
- Mobile menu: opacity and short horizontal/vertical transition, around 180–250 ms.
- Gallery transitions: crossfade or restrained slide, with clear controls and no automatic rapid rotation.

## Avoid
- Scroll-jacking, long pinned sections, constant parallax, cursor-following effects, springy overshoot, bouncing buttons, spinning icons, animated text that hurts readability, and large layout shifts.
- Do not animate every card independently if it causes a distracting wave.
- Do not delay main content until an animation completes.

## Accessibility and performance
- Respect `prefers-reduced-motion: reduce`; disable or simplify nonessential movement.
- Ensure content is visible if JavaScript or animation fails.
- Animate `transform` and `opacity` where possible.
- Avoid animating layout-heavy properties such as width, height, top, and left unless necessary.
- Test on mid-range mobile devices and watch for dropped frames.
- Keep animation code in client components only where needed.
