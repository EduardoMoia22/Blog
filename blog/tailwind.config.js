/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F9FAFB',
        'primary': '#6C70EB',
        'black': '#040415',
        'light-gray': '#A8AFB9',
        'white': '#FFFFFF',
        'hover': '#575CE7',
        'error': '#FA9898',
        'error-outline': '#FD7D7E'
      },
      fontFamily: {
        sans: 'Poppins, sans-serif'
      },
    },
  },
  plugins: [],
}
