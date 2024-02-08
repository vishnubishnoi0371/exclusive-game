/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundSize: { "100%": "100% 100%" },

      fontFamily: {
        "ff-inter": "Inter, sans-serif",
        "ff-anton": "Anton, sans-serif",
      },
      
      screens: {
        xs: "310px",
        xs_1: "480px",
        xs_2: "570px",
        xxs: "450px",
        sm_2: "650px",
      },
      animation: {
        rotate: "caramdice 6s infinite linear",
        flip: "cardflip 3s infinite linear",
      },
      keyframes: {
        caramdice: {
          "0%": { transform: "rotate(360deg)" },
        },
        cardflip: {
          "0%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(-9%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
    },
  },
  plugins: [],
};
