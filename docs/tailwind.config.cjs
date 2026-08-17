module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef8ff',
          100: '#d7f0ff',
          200: '#bfe6ff',
          300: '#8fd6ff',
          400: '#57bfff',
          500: '#1e9bff',
          600: '#0e78e6',
          700: '#0756bf',
          800: '#05408f',
          900: '#032a5f'
        },
        coral: {
          50: '#fff5f3',
          100: '#ffe9e1',
          200: '#ffd0bf',
          300: '#ffb697',
          400: '#ff8b63',
          500: '#ff6b3f',
          600: '#ff4f2a',
          700: '#e63b1f',
          800: '#b62f18',
          900: '#861f0f'
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
