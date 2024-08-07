/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-sea-green": "#8fbc8f",
      },
      animation: {
        turn: "turn 0.1s linear forwards",
      },
      keyframes: {
        turn: {
          "0%": {
            transform: "scaleY(1)",
          },
          "50%": {
            transform: "scaleY(0)",
          },
          "100%": {
            transform:"scaleY(-1)",
          },
        },
      },
    },
  },
  plugins: [],
};
