/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f2f4',
          100: '#e1e5e9',
          200: '#c3cbcf',
          300: '#a5b1b5',
          400: '#87979b',
          500: '#50535b',
          600: '#404247',
          700: '#303235',
          800: '#202123',
          900: '#101112',
        },
        accent: {
          50: '#fff4f0',
          100: '#ffe9e1',
          200: '#ffd3c3',
          300: '#ffbda5',
          400: '#ffa787',
          500: '#f64a00',
          600: '#c53b00',
          700: '#942c00',
          800: '#621e00',
          900: '#310f00',
        },
        red: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#CF1E07',
          600: '#a61a06',
          700: '#7d1304',
          800: '#530d03',
          900: '#2a0601',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

