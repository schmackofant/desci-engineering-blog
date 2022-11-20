const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        molecule: "#0dc1d2",
        "molecule-aqua": "#42dac7",
      },
      fontFamily: {
        sans: ["Sora", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

// font-family: 'Andada Pro', serif;

// font-family: 'Hahmlet', serif;

// font-family: 'Lora', serif;

// font-family: 'Sora', sans-serif;
