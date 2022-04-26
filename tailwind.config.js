module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      ripple: theme => ({
        colors: theme('colors'),
        modifierTransition: 'background 0.5s',
        activeTransition: 'background 0.5s'
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-ripple'),
    require('@tailwindcss/typography'),

  ],
}
