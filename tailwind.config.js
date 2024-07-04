/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'app-grey': '#252525',
      },
      fontFamily: {
        'Roboto-Regular': 'Roboto-Regular',
        'Helvetica-Regular': 'Helvetica-65-Regular',
        'Helvetica-Bold': 'Helvetica-65-Bold',
      },
    },
  },
  plugins: [],
};
