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
    colors: {
      transparent: 'transparent',
      primary: '#203961',
      white: '#ffffff',
      black: '#000000',
      wh: 'rgba(255, 255, 255, 0.5)',
      bl: 'rgba(0, 0, 0, 0.25)',
      button_gradient_from: '#1971B5',
      button_gradient_to: '#1A9CFF',
      sticker_gradient_from: '#E3D7D2',
      sticker_gradient_to: '#CDB9B0',
      lightBlue: '#50E6FF',
      lightPurple: '#9E67E5',
      faqCard: 'rgba(36, 76, 132, 0.5)',
      yellow: 'rgba(250, 169, 68, 1)',

    },
  },
  plugins: [
    function({addUtilities}) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke-color': '#50E6FF',
          '-webkit-text-stroke-width': '2px',
        },
        '.text-fill-transperent': {
          '-webkit-text-fill-color': '#203961',
        },
        '.text-background-clip': {
          '-webkit-background-clip': 'text',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
});
