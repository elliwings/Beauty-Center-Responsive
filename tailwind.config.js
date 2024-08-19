/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        main: ['"Lato", sans-serif'],
        secondFamily: ['"Marcellus", serif'],
      },
      maxWidth: {
        tablet: '712px',
        desktop: '1200px',
      },
      screens: {
        tablet: '712px',
        desktop: '1200px',
      },
      letterSpacing: {
        main: '-0.01em',
      },
      lineHeight: {
        constant: '1.2',
        footer: '1.4',
      },
      borderWidth: {
        thinFrame: '2px',
      },
      borderRadius: {
        'custom-40': '40px',
      },
      height: {
        heightGirl: '469px',
        heightActiveLine: '3px',
      },
      scale: {
        mainScale: '1.02',
      },
      boxShadow: {
        mainShadow: '0 6px 10px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        bgColor: '#eef5f8',
        title: '#1a1a1a',
        subtitle: '#25b8af',
        accent: '#519dbc',
        border: '#adadad',
        text: '#5c5c5c',
        pink: '#faa6a4',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      const containers = {
        '.container': {
          boxSizing: 'border-box',
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '80px',
          paddingLeft: '28px',
          paddingRight: '28px',
          paddingBottom: '0',
        },
      };
      addComponents(containers);
    },
    function ({ addComponents, theme }) {
      const headings = {
        '.heading-primary': {
          fontFamily: theme('fontFamily.secondFamily'),
          fontSize: '60px',
          color: theme('color.title'),
          textTransform: 'capitalize',
          lineHeight: theme('lineHeight.constant'),
          letterSpacing: '0.02em',

          marginBottom: '64px',
          marginTop: '28px',

          '@media (min-width: 768px)': {
            fontSize: '72px',
          },
        },
        '.heading-secondary': {
          fontFamily: theme('fontFamily.secondFamily'),
          fontSize: '36px',
          textTransform: 'capitalize',
          color: theme('color.title'),
          lineHeight: theme('lineHeight.constant'),
          letterSpacing: theme('letterSpacing.main'),

          marginBottom: '64px',
          marginTop: '28px',

          '@media (min-width: 768px)': {
            fontSize: '48px',
          },
          '@media (min-width: 1024px)': {
            fontSize: '60px',
          },
        },

        '.subtitle': {
          fontSize: '20px',
          textTransform: 'uppercase',
          lineHeight: '24px',
          color: theme('colors.accent'),

          '@media (min-width: 1024px)': {
            fontSize: '24px',
          },
        },
      };
      addComponents(headings);
    },
    function ({ addComponents, theme }) {
      const buttons = {
        '.painted-button': {
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',

          border: `2px solid ${theme('colors.accent')}`,
          borderRadius: theme('borderRadius.custom-40'),

          padding: '16px 40px',
          marginTop: '56px',

          fontFamily: theme('fontFamily.secondFamily'),
          fontSize: '20px',
          color: 'white',
          textTransform: 'uppercase',

          backgroundColor: theme('colors.accent'),

          transition: 'all 300ms ease-in-out',

          '&:hover': {
            boxShadow: theme('boxShadow.mainShadow'),
            transition: 'all 300ms ease-in-out',
          },

          '@media (min-width: 1024px)': {
            marginTop: '40px',
            alignSelf: 'flex-start',
          },
        },
        '.button': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '12px 20px',

          fontFamily: theme('fontFamily.secondFamily'),
          fontSize: '16px',
          color: theme('colors.accent'),
          textTransform: 'uppercase',

          border: `2px solid ${theme('colors.accent')}`,
          borderRadius: theme('borderRadius.custom-40'),

          transition: 'all 300ms ease-in-out',

          '&:hover': {
            boxShadow: theme('boxShadow.mainShadow'),
            transition: 'all 300ms ease-in-out',
          },

          '@media (min-width: 1024px)': {
            fontSize: '20px',
          },
        },
      };
      addComponents(buttons);
    },
  ],
};
