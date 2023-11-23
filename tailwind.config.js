/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: true
  },
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-accent': '#AAB438',
        'secondary-accent': '#29A073',
        'bleached-accent': '#9dd9ff',
        'secondary-tint': '#E8F6FF',
        'light-error': '#f0664a',
        'primary-gray': '#A6ABBB',
        'bg-orange': '#E8B44B',
      },
      text:{
        'primary-accent': '#62D2A2',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },

    minHeight: {
      '1/2': '50%',
    },

    maxHeight: {
      'table-screen': '-webkit-fill-available',
      '500': '500px',
    },

    minWidth: {
      100: '100px'
    }
  },
  plugins: [],
}