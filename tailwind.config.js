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
          black: '#ffffff',
          navy: '#f0f4ff',
          darker: '#e0e7ff',
          dark: '#c7d2fe',
          card: 'rgba(255, 255, 255, 0.7)',
          purple: '#3b82f6', // Use the bright blue for accents
          pink: '#2563eb',   // Darker blue for secondary accents
          blue: '#1d4ed8',   // Even darker blue
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
