/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50:  '#fdf4ff',
          100: '#fae8ff',
          200: '#f3d0ff',
          300: '#e8a6ff',
          400: '#d46ef5',
          500: '#bc46e0',
          600: '#9d2bbc',
          700: '#831e9a',
          800: '#6c1a7e',
          900: '#451050',
          950: '#1a0520',
        },
        gold: {
          300: '#fde68a',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', 'sans-serif'],
        serif: ['"Noto Serif SC"', 'serif'],
      },
      backgroundImage: {
        'ink-gradient': 'linear-gradient(135deg, #1a0520 0%, #2d0a40 50%, #1a0520 100%)',
        'gold-gradient': 'linear-gradient(135deg, #d97706, #f59e0b, #fbbf24)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(212, 110, 245, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(212, 110, 245, 0.7), 0 0 40px rgba(212, 110, 245, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}
