/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      darkMode: "class",
      theme: {
        extend: {
          spacing: {
            13: "3.25rem",
          },
          fontFamily: {
            inter: ["Inter"],
          },
          colors: {
            kopi: "#c0ffee",
          },
          animation: {
            "bounce-slow": "bounce 2s linear infinite",
            goyang: "goyang 1s linear infinite",
          },
          keyframes: {
            goyang: {
              "0%,100%": { transform: "rotate(-3deg)" },
              "50%": { transform: "rotate(3deg)" },
            },
          },
        },
      },
    },
  },
  plugins: [],
};
