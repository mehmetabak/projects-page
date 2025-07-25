// tailwind.config.js
import typography from '@tailwindcss/typography';
import lineClamp from '@tailwindcss/line-clamp';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      // Renkleri CSS değişkenlerinden alacak şekilde yapılandır
      colors: {
        bg: 'var(--color-bg)',
        card: 'var(--color-card)',
        panel: 'var(--color-panel)',
        border: 'var(--color-border)',
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'primary-text': 'var(--color-primary-text)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        themed: 'var(--color-primary)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Lexend Deca', 'sans-serif'],
      },
    },
  },
  plugins: [typography, lineClamp],
}