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
        'noise-dark': "url('./assets/noise-dark.webp')",
        'noise-light': "url('./assets/noise-light.webp')",
      },
      colors: {
        quartz: {
          l90: "#ededed",
          l80: "#dbdbdb",
          l70: "#c9c9c9",
          l60: "#b7b7b7",
          l50: "#a5a5a5",
          l40: "#929292",
          l30: "#808080",
          l20: "#6e6e6e",
          l10: "#5c5c5c",
          DEFAULT: "#4a4a4a",
          d10: "#434343",
          d20: "#3b3b3b",
          d30: "#343434",
          d40: "#2c2c2c",
          d50: "#252525",
          d60: "#1e1e1e",
          d70: "#161616",
          d80: "#0f0f0f",
          d90: "#070707",
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(110%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
