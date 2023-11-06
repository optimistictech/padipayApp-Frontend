/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // community page customixed colors
         'clifford': '#da373d',
         'navBlue':'#003399',
         'primary': '#003399',
      },
      // backgroundImage: {
      //   'hero-img': "url('../assets/CommunityPageImages/diversity.png')",
      // },
  },
  plugins: [],
}
}