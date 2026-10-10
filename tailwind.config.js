/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F4ED',
        paper: '#FFFEFA',
        ink: '#102A38',
        'ink-soft': '#27414D',
        gold: '#A8874D',
        'gold-light': '#D4BD8B',
        stone: '#E5E0D6',
        muted: '#68757A',
        success: '#287A57',
        error: '#B33A35',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
