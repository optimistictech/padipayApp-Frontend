/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#003399',
    }),
    extend: {
      fontFamily: {
        Work: ['Montserrat', 'sans-serif'],
        primaryFont: ['Poppins', 'sans-serif'],
        secondaryFont: ['Lato', 'sans-serif'],
      },
      height: {
        vh: '100vh',
      },
      backgroundImage: {
        blogBanner: "url('Images/bg.jpeg')",
      },

      backgroundColor: {
        lightgray: 'lightgray',
      },
      colors: {
        primary: '#003399',
        lowergrey: '#272626',
        whiteColor: '#fff',
        clifford: '#da373d',
        padiHead: '#039',
        navColor: '#696A75',
        grey: '#039',
      },
    },

    backgroundImage: {
      'lender-borrower': "url('/assets/images/lb-bg.png')",
      'dash-board-image': "url('/assets/images/dash-img.png')",
    },
  },
  plugins: [],
};
