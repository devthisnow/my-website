/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mygray: {
          DEFAULT: '#D9D9D9',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateRows: {
        "animate-height-open": "1fr",
        "animate-height-closed": "0fr",
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0.85',
            transform: 'translateY(1px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'scroll-anim': {
          'entry 0%': {
            opacity: "0",
            transform: "translateY(100%)",
          },
          'entry 100%': {
            opacity: "1",
            transform: "translateY(0)",
          },
          'exit 0%': {
            opacity: "1",
            transform: "translateY(0)",
          },
          'exit 100%': {
            opacity: "0",
            transform: "translateY(-100%)",
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 300ms ease-in-out 0ms',
        'fade-in-50': 'fade-in 300ms ease-in-out 50ms',
        'fade-in-100': 'fade-in 300ms ease-in-out 100ms',
        'fade-in-150': 'fade-in 300ms ease-in-out 150ms',

        "scroll-me": 'scroll-anim auto linear forwards',
      },
    },
  },
  plugins: [],
};
