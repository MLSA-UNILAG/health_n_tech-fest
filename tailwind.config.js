const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
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
      fontFamily: {
        segoe: ["Segoe UI", "sans-serif"],
      },
      backgroundColor: {
        "page-blue": "#243963",
        "page-orange": "#faa944",
        "page-white": "#fffaeb"
      },
      colors: {
        "primary-color": "#292929"
      },
      textShadow: {
        "text-3d": "1px 1px 2px #000000",
      },
      textStroke: {
        "stroke-3d": "4px black"
      }
    },
  },
  plugins: [
    function({addUtilities}) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke-color': '#50e6ff',
          '-webkit-text-stroke-width': '1px',
          // 'text-stroke': '1px #50e6ff'
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
});
