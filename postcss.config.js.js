// postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss'), // Make sure Tailwind is correctly included
    require('autoprefixer'), // Optional: Adds vendor prefixes to CSS
  ],
};
