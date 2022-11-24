/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#E5F2FF',
          DEFAULT: '#3D99F5',
        },
        red: {
          light: '#FFE5E5',
          DEFAULT: '#F5483D',
        },
        gray: {
          active: '#92969F',
          DEFAULT: '#D1D1D1',
        },
        white: {
          DEFAULT: '#FFFFFF',
          secondary: '#FAFAFA',
        },
        purple: {
          light: '#F3E8FF',
          DEFAULT: '#8047B9',
        },
        text: {
          black: '#111827',
          grey: '#92969F',
          white: '#FFFFFF',
        },
        billard: {
          cloth: '#0269D5',
          grid: '#418fe0',
        },
      },
      aspectRatio: {
        '2/1': '2 / 1',
      },
      gridTemplateRows: {
        border: '33px, 1fr, 33px',
      },
      gridTemplateColumns: {
        border: '33px, 1fr, 33px',
      },
    },
    fontFamily: {
      sans: ['Poppins'],
    },
  },
  plugins: [],
}
