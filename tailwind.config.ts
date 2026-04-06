import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface: '#171717',
        elevated: '#252525',
        primary: '#818CF8',
        accent: {
          orange: '#FFA600',
          green: '#38F564',
          pink: '#F538EC',
          blue: '#387AF5',
        },
        'text-primary': '#FFFFFF',
        'text-secondary': 'rgba(255,255,255,0.5)',
        'text-tertiary': '#EBEBEB',
        border: 'rgba(255,255,255,0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"PT Serif"', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      borderRadius: {
        DEFAULT: '0.625rem',
      },
    },
  },
  plugins: [],
} satisfies Config
