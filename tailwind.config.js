module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/**/*.{js,ts,jsx,tsx}'],
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
          '0%': { 'margin-top': '-90px' },
          '2%': { 'margin-top': '-60px' },
          '33%': { 'margin-top': '-60px' },
          '35%': { 'margin-top': '-30px' },
          '66%': { 'margin-top': '-30px' },
          '68%, 100%': { 'margin-top': '0px' },
        },
        'text-slide-md': {
          '0%': { 'margin-top': '-108px' },
          '2%': { 'margin-top': '-72px' },
          '33%': { 'margin-top': '-72px' },
          '35%': { 'margin-top': '-36px' },
          '66%': { 'margin-top': '-36px' },
          '68%, 100%': { 'margin-top': '0px' },
        },
        'text-slide-lg': {
          '0%': { 'margin-top': '-168px' },
          '2%': { 'margin-top': '-112px' },
          '33%': { 'margin-top': '-112px' },
          '35%': { 'margin-top': '-56px' },
          '66%': { 'margin-top': '-56px' },
          '68%, 100%': { 'margin-top': '0px' },
        }
      },
      animation: {
        'text-slide-sm': 'text-slide-sm 7s linear infinite',
        'text-slide-md': 'text-slide-md 7s linear infinite',
        'text-slide-lg': 'text-slide-lg 7s linear infinite'
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
