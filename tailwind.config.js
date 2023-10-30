/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './src/**/*.js'],
  theme: {
    fontFamily: {
      KronaOne: ['KronaOne-Regular', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '30px',
        tablet: '24px',
        desktop: '100px',
      },
    },
    screens: {
      tablet: '768px',
      desktop: '1440px',
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      main: {
        dark: 'var(--color-main-dark)',
        yellow: 'var(--color-main-yellow)',
        orange: 'var(--color-main-orange)',
      },
      text: {
        blue: 'var(--color-text-blue)',
        brown: 'var(--color-text-brown)',
      },
      background: {
        orange: 'var(--color-background-orange)',
        yellow: 'var(--color-background-yellow)',
        blue: 'var(--color-background-blue)',
      },
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
      '5xl': '40px',
      '6xl': '44px',
    },
    extend: {
      backgroundImage: {
        'blue-gradient': 'var(--color-linear-gradient-blue)',
        'yellow-gradient': 'var(--color-linear-gradient-yellow)',
        'orange-gradient': 'var(--color-linear-gradient-orange)',
      },
    },
  },
  plugins: [],
}
