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
        sans: ['Montserrat', 'sans-serif'],
      },
      height: {
        vh: '100vh',
      },
    },
    colors: {
      primary: '#003399',
      lowergrey: '#272626',
      whiteColor: '#fff',
    },
    backgroundImage: {
      'lender-borrower': "url('/assets/images/lb-bg.png')",
      'dash-board-image': "url('/assets/images/dash-img.png')",
    },

    extend: {
      colors: {

        clifford: '#da373d',
        padiHead: '#039',
        navColor: '#696A75',
        grey: '#039',
        // community page customixed colors
         'navBlue':'#003399',
         'primary': '#003399',
      },
      fontFamily: {
        Work: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        blogBanner: "url('Images/bg.jpeg')",
      },

      backgroundColor: {
        lightgray: 'lightgray',
      },
    },
  },
  plugins: [],
};
