module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito: ['nunito'],
        poppins: ['Poppins'],
        roboto: ['Roboto'],
      },
      keyframes: {
        'text-slide-sm': {
          '0%': { 'margin-top': '-91px' },
          '1%': { 'margin-top': '-61px' },
          '33%': { 'margin-top': '-61px' },
          '34%': { 'margin-top': '-31px' },
          '66%': { 'margin-top': '-31px' },
          '67%, 100%': { 'margin-top': '-1px' },
        },
        'text-slide-md': {
          '0%': { 'margin-top': '-109px' },
          '1%': { 'margin-top': '-73px' },
          '33%': { 'margin-top': '-73px' },
          '34%': { 'margin-top': '-37px' },
          '66%': { 'margin-top': '-37px' },
          '67%, 100%': { 'margin-top': '-1px' },
        },
        'text-slide-lg': {
          '0%': { 'margin-top': '-168px' },
          '1%': { 'margin-top': '-112px' },
          '33%': { 'margin-top': '-112px' },
          '34%': { 'margin-top': '-56px' },
          '66%': { 'margin-top': '-56px' },
          '67%, 100%': { 'margin-top': '0px' },
        }
      },
      animation: {
        'text-slide-sm': 'text-slide-sm 10s linear infinite',
        'text-slide-md': 'text-slide-md 10s linear infinite',
        'text-slide-lg': 'text-slide-lg 10s linear infinite'
      },
      height: {
        '7.5': '30px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
