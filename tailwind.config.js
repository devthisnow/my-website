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
        mywhite: {
          DEFAULT: '#EBEBEB',
        },
        myblack: {
          DEFAULT: '#020804',
        },
        myblue: {
          DEFAULT: '#32B1C1',
        },
        mylightgray: {
          DEFAULT: '#ECEAEA',
        },
        myaccent: {
          DEFAULT: '#1BB2C8',
        },
        myerror: {
          DEFAULT: '#CE5B5B',
        },
        mychatonline: {
          DEFAULT: '#14C6B7',
        },
        mychatqst: {
          DEFAULT: '#B5B3B2',
        },
        mychatasw: {
          DEFAULT: '#B5D9DE',
        },
      },
      backgroundImage: {
        "my-grad-acc": "linear-gradient(-107deg, #008299, #0097b1, #00accb, #00c2e5, #00d8ff)",
      },
      gridTemplateRows: {
        "animate-height-open": "1fr",
        "animate-height-closed": "0fr",
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0.5',
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
        },
        'just-fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(15px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out': {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 300ms ease-in-out 0ms',
        'fade-in-50': 'fade-in 300ms ease-in-out 50ms',
        'fade-in-100': 'fade-in 300ms ease-in-out 100ms',
        'fade-in-150': 'fade-in 300ms ease-in-out 150ms',
        'justFadeIn': '300ms just-fade-in ease-out 0ms',
        'slide-up': 'slide-up 600ms ease-in-out 0ms',

        // "scroll-me": 'scroll-anim auto linear forwards',
      },
    },
  },
  plugins: [],
};
