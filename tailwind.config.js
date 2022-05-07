module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.js'
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
