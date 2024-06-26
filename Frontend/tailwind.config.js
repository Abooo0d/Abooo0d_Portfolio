/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cu-primary": "#edf2f8",
        "cu-secondary": "#313bac",
        "cu-black": "#030303",
        "cu-light-gray": "#edf2f8",
        "cu-gray": "#6b7688",
        "cu-brown": "#46364a",
        "cu-white": "#ffffff",
      },
      backgroundImage: {
        menuBg: "url(/src/Assets/bgWhite.png)",
      },
    },
  },
  plugins: [],
};
