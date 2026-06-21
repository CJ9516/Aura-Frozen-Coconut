module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        auraRed: '#C62828',
        auraGreen: '#2E7D32',
        auraBrown: '#8D6E63'
      },
      fontFamily: {
        poppins: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}
