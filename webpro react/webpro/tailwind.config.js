/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],

  theme: {
    extend: {
      keyframes: {
        scaleUpDown: {
          '0%, 100%': { transform: 'scale(1)' },   // Initial and final state (normal size)
          '50%': { transform: 'scale(1.1)' },      // At halfway, element scales up by 20%
        },
      },
      animation: {
        scaleUpDown: 'scaleUpDown 5s ease-in-out infinite',  // 2s loop, easing in and out
      },
    },
  },
  plugins: [],
}

