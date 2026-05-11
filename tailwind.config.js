/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,html}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F2A44',
          900: '#0a1d31',
          800: '#0F2A44',
          700: '#16395a',
        },
        teal: {
          DEFAULT: '#0E7C7B',
          800: '#0E7C7B',
          700: '#0a615f',
          600: '#0E7C7B',
          500: '#159896',
          100: '#cbe9e8',
          50: '#ecf6f6',
        },
        coral: {
          DEFAULT: '#E07856',
          600: '#E07856',
          500: '#e58a6c',
          100: '#fbe1d8',
        },
        offwhite: '#fafaf7',
        body: '#475569',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '1240px',
      },
    },
  },
  plugins: [],
};
