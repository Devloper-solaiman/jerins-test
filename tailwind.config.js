
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctorsTheme: {
          primary: "#f63e7b",
          secondary: "#251d58",
          accent: "#fff8f5",
          neutral: "#111430",
          "base-100": "#ffffff",
        },
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          gold: "#FFD700",
          ptext: '#000000B2',
        }
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui"), 'macros'],

}