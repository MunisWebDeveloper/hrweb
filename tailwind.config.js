/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
    extend: {
      colors: {
        primary: '#E83667',
        primaryDark: '#EBB2C51',
        secondary: '#21D4B9',
        dark: '#303030',
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    // screens: {
    //   xs: '480px',
    //   ss: '620px',
    //   sm: '768px',
    //   md: '1060px',
    //   lg: '1200px',
    //   xl: '1700px',
    // },
  },
  plugins: [],
}
