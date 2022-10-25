/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#FFFFFF',
          secondary: '#FAFAFA',
        },
        secondary: {
          light: '#E5F2FF',
          DEFAULT: '#3D99F5',
        },
        accent: {
          light: '#F3E8FF',
          DEFAULT: '#8047B9',
        },
        gray: {
          light: '#D1D1D1',
          DEFAULT: '#92969F',
        },
        billard: {
          cloth: '#0269D5',
        },
      },
      aspectRatio: {
        '2/1': '2 / 1',
      },
    },
    fontFamily: {
      sans: ['Poppins'],
    },
  },
  plugins: [],
}
