/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#111A6F',
        'light-blue': '#64B5F6',
      },
      borderRadius: {
        'lg': '5px',
      },
    },
  },
  plugins: [],
}

