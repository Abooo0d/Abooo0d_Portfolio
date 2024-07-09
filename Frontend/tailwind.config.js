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
        homeBg: "url(/src/Assets/bgIMG.png)",
        aboutBg: "url(/src/Assets/aboutbg.jpg)",
        workBg: "url(/src/Assets/workbg.jpg)",
      },
      boxShadow: {
        "my-custom-shadow":
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};
