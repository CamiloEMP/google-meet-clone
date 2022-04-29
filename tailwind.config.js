module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './node_modules/flowbite/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
