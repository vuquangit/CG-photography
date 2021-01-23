module.exports = {
  purge: ["./src//*.{js,ts,jsx,tsx}", "./pages//*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      '0': 0,
     '10': 10,
     '20': 20,
     '30': 30,
     '40': 40,
     '50': 50,
     '25': 25,
     '50': 50,
     '75': 75,
     '100': 100,
     '1000': 1000,
      'auto': 'auto',
    },
    extend: {
      width: {
        'container': '1200px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
