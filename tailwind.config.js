/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#030008',
          navy: '#050515',
          darker: '#0a0a1f',
          dark: '#120e2e',
          card: 'rgba(10, 6, 22, 0.65)',
          purple: '#a855f7',
          pink: '#d946ef',
          blue: '#3b82f6',
        }
      },
      animation: {
        'pulse-glow': 'headingGlow 3s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'border-flow': 'borderFlow 4s linear infinite',
      },
      keyframes: {
        headingGlow: {
          '0%, 100%': { 
            textShadow: '0 0 4px rgba(168, 85, 247, 0.2), 0 0 8px rgba(168, 85, 247, 0.1)',
            color: '#ffffff'
          },
          '50%': { 
            textShadow: '0 0 15px rgba(168, 85, 247, 0.9), 0 0 25px rgba(217, 70, 239, 0.7)',
            color: '#f3e8ff'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(3deg)' },
        },
        borderFlow: {
          '0%, 100%': { borderColor: '#a855f7' },
          '50%': { borderColor: '#d946ef' },
        }
      }
    },
  },
  plugins: [],
}
