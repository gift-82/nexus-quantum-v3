/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      // Glassmorphism Effect
      backdropBlur: {
        'xs': '4px',
        'sm': '8px',
      },
      // Quantum Animations
      animation: {
        bounce: 'bounce 2s infinite ease-in-out',
      },
      // Gradient Presets
      gradientColorStops: {
        'blue': '#1DA1F2',
        'purple': '#9B59B6',
        'pink': '#E91E63',
      },
      // Custom Color Palette
      colors: {
        institutionalBlue: '#1B2741',
        institutionalGreen: '#2ECC71',
        institutionalOrange: '#E67E22',
        institutionalRed: '#E74C3C',
      },
    },
  },
  plugins: [],
};