/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      width: {
        128: "22rem",
        129: "30rem",
      },
      height: {
        128: "53rem",
      },
    },
    marginLeft: {
      128: "-11rem",
    },
  },
  plugins: [],
};
