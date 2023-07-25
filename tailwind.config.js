/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"], // Grabing all the content from the HTML file as the content.
  theme: {
    extend: {
      backgroundImage: {
        "cta-img": "url(./images/mic.png)",
      },
      colors: {
        primary: "#ED7F39",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Custom Poppons Font link
      },
    },
  },
  plugins: [],
};
