import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F5F0',
        ink: '#0E1116',
        deep: '#0F3D2E',
        mint: '#DDEFE6',
        coral: '#FF6B4A',
        hairline: '#E6E1D6',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      boxShadow: {
        hairl: '0 0 0 1px rgba(14, 17, 22, 0.08)',
        lift: '0 24px 48px -24px rgba(14, 17, 22, 0.25)',
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
    },
  },
  plugins: [],
}