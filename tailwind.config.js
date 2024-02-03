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
      boxShadow: {
        crd_sh_1: "1px 1px 8px 2px rgba(0, 0, 0, 0.25) inset",
        crd_sh_2: "0px 0px 4px 0px rgba(0, 0, 0, 0.25) inset",
        box_sh_2: "  0px 10px 20px 0px rgba(41, 41, 42, 0.07)",
        box_sh_2_hv: "  0px 30px 20px 0px rgba(41, 41, 42, 0.07)",
        btn_hv_1: "  0px 0px 64px 0px rgba(176, 0, 0, 0.30)",
        btn_hv_2: "  0px 0px 54px 0px rgba(41, 41, 42, 0.07)",
      },
      screens: {
        xs: "310px",
        xs_1: "480px",
        xs_2: "570px",
        900: "900px",
        xxs: "450px",
        sm_2: "650px",
      },
    },
  },
  plugins: [],
};
