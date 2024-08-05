/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cu-primary": "rgb(147 51 234)",
        "cu-secondary": "rgb(111 36 179)",
        "cu-black": "#030303",
        "cu-light-gray": "#edf2f8",
        "cu-gray": "#6b7688",
        "cu-brown": "#46364a",
        "cu-white": "#ffffff",
      },
      backgroundImage: {
        menuBg: "url(/src/Assets/bgWhite.png)",
        homeBg: "url(/src/Assets/bgIMG.png)",
        workBg: "url(/src/Assets/aboutBg.jpg)",
        aboutBg: "url(/src/Assets/workBg.jpg)",
        languagesBg: "url(/src/Assets/languagesBg.jpg)",
        skillsBg: "url(/src/Assets/SkillsBg.jpg)",
        dividerBg: "url(/src/Assets/dividerBg2.png)",
        dividerBottomBg: "url(/src/Assets/dividerBottomBg2.png)",
        sectionDividerBg: "linear-gradient(#1e214c,#9333ea)",
      },
      boxShadow: {
        "my-custom-shadow":
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        worksShadow: "#2a1033 0 50px 68px inset,#1f0f2f 0 -50px 68px inset",
        // aboutShadow: "",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};
