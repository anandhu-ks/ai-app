/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        opentext: ['OpenText'],
        opendisplay: ['OpenDisplay']
      },
      colors: {
        primary: "#232224",
      }
    },
  },
  plugins: [],
}