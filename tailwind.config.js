module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.tsx'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--ifm-color-primary)',
        primaryDark: 'var(--ifm-color-primary-dark)',
        primaryLight: 'var(--ifm-color-primary-light)',
        secondary: 'var(--ifm-color-secondary)',
        secondaryDark: 'var(--ifm-color-secondary-dark)',
        secondaryLight: 'var(--ifm-color-secondary-light)',
        background: 'var(--ifm-background-color)'
      }
    }
  },
  variants: {
    extend: {}
  },
  corePlugins: {
    preflight: false
  },
  plugins: [require('@tailwindcss/typography')]
}
