/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'noise-dark': "url('./assets/noise-dark.png')",
        'noise-light': "url('./assets/noise-light.png')",
      },
    },
  },
  plugins: [],
}

