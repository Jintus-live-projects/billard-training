/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: {
          light: '#E5F2FF',
          DEFAULT: '#3D99F5',
        },
        accent: {
          light: '#F3E8FF',
          DEFAULT: '#8047B9',
        },
      },
    },
    fontFamily: {
      sans: ['Poppins'],
    },
  },
  plugins: [],
}
