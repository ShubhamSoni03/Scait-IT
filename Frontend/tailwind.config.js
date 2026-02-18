/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'corporate-blue': '#0056b3', // Example corporate blue
        'light-gray': '#f8f9fa',
      }
    },
  },
  plugins: [],
}
