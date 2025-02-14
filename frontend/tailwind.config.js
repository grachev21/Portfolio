/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorPanel: "#000000FF",
        colorTitle: "#1F1F1FFF",
        colorText: "#1D1D1DFF",
        colorBackground: "#ECEDF8FF",
        colorBackgroundDark: "#EBEBEBFF",
        colorBackgroundButton: "#2B2B2BFF",
        colorLinkLight: "#DDDDDDFF",
        colorLinkDark: "#6B6B6BFF",
        colorBorder: "#444444FF",
        colorBgCard: "#ffffff"
      },
      fontFamily: {
        montserrat: ["Montserrat", "serif"],
      },
      screens: {
        tablet: "830px",
        laptop: "1024px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
