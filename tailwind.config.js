/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#020617',
        foreground: '#f8fafc',
        primary: {
          DEFAULT: '#06b6d4',
          foreground: '#020617',
        },
        secondary: {
          DEFAULT: '#0f172a',
          foreground: '#f8fafc',
        },
        accent: {
          DEFAULT: '#f97316',
          foreground: '#020617',
        },
        muted: {
          DEFAULT: '#1e293b',
          foreground: '#94a3b8',
        },
        border: 'rgba(148, 163, 184, 0.1)',
      },
      fontFamily: {
        heading: ['Rajdhani', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'aurora': 'aurora 20s ease infinite',
        'spark': 'spark 300ms ease-out forwards',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(50px, -30px)' },
          '50%': { transform: 'translate(-20px, 40px)' },
          '75%': { transform: 'translate(-40px, -20px)' },
        },
        spark: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' },
          '50%': { transform: 'scale(1.1)', boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}

