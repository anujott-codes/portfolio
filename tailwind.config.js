/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#030303',
          900: '#050505',
          800: '#0a0a0a',
          700: '#141414',
          600: '#1a1a1a',
          500: '#252525',
          400: '#333333',
          300: '#444444',
        },
        accent: {
          DEFAULT: '#DFFF00',
          50:  '#FDFFF0',
          100: '#F8FFD1',
          200: '#F0FFA3',
          300: '#E5FF3D',
          400: '#DFFF00',
          500: '#C8E600',
          600: '#A3BD00',
          700: '#7A8E00',
          800: '#525F00',
          900: '#293000',
        },
        glass: {
          light:  'rgba(255, 255, 255, 0.04)',
          medium: 'rgba(255, 255, 255, 0.06)',
          heavy:  'rgba(255, 255, 255, 0.10)',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        txt: {
          primary:   '#F5F5F0',
          secondary: '#A3A3A3',
          muted:     '#737373',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'glow-pulse':   'glow-pulse 3s ease-in-out infinite',
        'fade-in-up':   'fade-in-up 0.6s ease-out forwards',
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'blob':         'blob 12s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%':      { opacity: '0.7' },
        },
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        'blob': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%':      { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%':      { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
      },
      boxShadow: {
        'glow':      '0 0 20px rgba(223, 255, 0, 0.12)',
        'glow-lg':   '0 0 40px rgba(223, 255, 0, 0.18)',
        'glow-sm':   '0 0 10px rgba(223, 255, 0, 0.08)',
        'glow-xl':   '0 0 60px rgba(223, 255, 0, 0.22)',
        'card':      '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 20px 40px -12px rgba(0, 0, 0, 0.6), 0 0 24px rgba(223, 255, 0, 0.07)',
      },
    },
  },
  plugins: [],
}
