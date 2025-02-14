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
      },

      typography: {
        DEFAULT: {
          css: {
            color: '#E9E9E9',
            h1: {
              color: '#E9E9E9',
            },
            h2: {
              color: '#E9E9E9',
            },
            h3: {
              color: '#E9E9E9',
            },
            h4: {
              color: '#E9E9E9',
            },
            p: {
              color: '#E9E9E9',
            },
            li: {
              color: '#E9E9E9',
            },
            strong: {
              color: '#E9E9E9',
            },
            blockquote: {
              color: '#E9E9E9',
            },
            code: {
              color: '#E9E9E9',
            },
            pre: {
              color: '#E9E9E9',
            },
            a: {
              color: '#E9E9E9',
              '&:hover': {
                color: '#FFFFFF',
              },
            },
          },
        },
      },


    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}