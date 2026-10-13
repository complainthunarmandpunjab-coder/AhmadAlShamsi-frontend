# Color System

The reference uses warm ivory, dark blue-black, muted gold, soft stone gray, and restrained green for WhatsApp only. Gold is an accent, not a large background color.

## Core tokens

| Token | Hex | Purpose |
|---|---|---|
| `--color-ivory` | `#F7F4ED` | Main page background |
| `--color-paper` | `#FFFEFA` | Cards, forms, and raised surfaces |
| `--color-ink` | `#102A38` | Main text and primary buttons |
| `--color-ink-soft` | `#27414D` | Secondary headings and dark surface variation |
| `--color-gold` | `#A8874D` | Small rules, active states, fine borders, details |
| `--color-gold-light` | `#D4BD8B` | Subtle highlight, use sparingly |
| `--color-stone` | `#E5E0D6` | Dividers, borders, neutral panels |
| `--color-muted` | `#68757A` | Supporting text |
| `--color-white` | `#FFFFFF` | Text on dark surfaces and clean card surfaces |
| `--color-success` | `#287A57` | Form success states |
| `--color-error` | `#B33A35` | Form errors |

## CSS custom properties

```css
:root {
  --color-ivory: #F7F4ED;
  --color-paper: #FFFEFA;
  --color-ink: #102A38;
  --color-ink-soft: #27414D;
  --color-gold: #A8874D;
  --color-gold-light: #D4BD8B;
  --color-stone: #E5E0D6;
  --color-muted: #68757A;
  --color-white: #FFFFFF;
  --color-success: #287A57;
  --color-error: #B33A35;
}
```

## Usage rules
- Use ivory for most page backgrounds to reproduce the reference's warm, editorial feel.
- Use ink/navy for headings, body text where contrast is needed, navigation, and primary calls to action.
- Use gold for 1–2 px section rules, selected tabs, tiny labels, and restrained highlights. Never use gold for long paragraphs.
- Use stone for separators and subtle outlines. Avoid thick borders around every card.
- Keep shadows very light and soft; rely on spacing, photography, and fine borders for hierarchy.
- WhatsApp green may be used only for the WhatsApp contact affordance and related states.
- Avoid gradients, neon, glassmorphism, excessive saturated blue, and rainbow palettes.

## Contrast
Check text and interactive states against WCAG 2.2 AA. The gold token is a decorative accent and should not be used for small text on ivory unless the actual contrast ratio passes.
