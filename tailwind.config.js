module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.tsx'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--ifm-color-primary)',
          dark: 'var(--ifm-color-primary-dark)',
          darker: 'var(--ifm-color-primary-darker)',
          darkest: 'var(--ifm-color-primary-darkest)',
          light: 'var(--ifm-color-primary-light)',
          lighter: 'var(--ifm-color-primary-lighter)',
          lightest: 'var(--ifm-color-primary-lightest)',
          contrast: 'var(--ifm-font-color-base)'
        },
        secondary: {
          DEFAULT: 'var(--ifm-color-secondary)',
          dark: 'var(--ifm-color-secondary-dark)',
          darker: 'var(--ifm-color-secondary-darker)',
          darkest: 'var(--ifm-color-secondary-darkest)',
          light: 'var(--ifm-color-secondary-light)',
          lighter: 'var(--ifm-color-secondary-lighter)',
          lightest: 'var(--ifm-color-secondary-lightest)',
          contrast: 'var(--ifm-font-color-base)'
        },
        background: 'var(--ifm-background-color)'
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--ifm-font-color-base)',
            a: {
              color: 'var(--ifm-link-color)',
              '&:hover': {
                color: 'var(--ifm-link-hover-color)'
              }
            }
          }
        }
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
