/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "280px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "992px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
