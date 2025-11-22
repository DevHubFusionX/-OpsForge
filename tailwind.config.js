/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
        heading: ['Sora', 'Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: '#38BDF8',
        secondary: '#0EA5E9',
      },
    },
  },
  plugins: [],
}
