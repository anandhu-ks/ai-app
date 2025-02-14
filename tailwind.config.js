/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{html,js}",
    "src/components/**/*.{html,ts,css,scss}",
    "src/ui/**/*.{html,ts,css,scss}"

  ],
  theme: {
    extend: {
      fontFamily: {
        opentext: ['OpenText'],
        opendisplay: ['OpenDisplay']
      },
      colors: {
        primary: "#232224",
        secondary: "#E5E5E5"
      }
    },
  },
  plugins: [],
}