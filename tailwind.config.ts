import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  //       'gradient-conic':
  //         'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  //     },
  //   },
  // },

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontSize: {
      'heading1-bold': [
        '36px',
        {
          lineHeight: '140%',
          fontWeight: '700',
        },
      ],
      'heading1-semibold': [
        '36px',
        {
          lineHeight: '140%',
          fontWeight: '600',
        },
      ],
      'heading2-bold': [
        '30px',
        {
          lineHeight: '140%',
          fontWeight: '700',
        },
      ],
      'heading2-semibold': [
        '30px',
        {
          lineHeight: '140%',
          fontWeight: '600',
        },
      ],
      'heading3-bold': [
        '24px',
        {
          lineHeight: '140%',
          fontWeight: '700',
        },
      ],
      'heading4-medium': [
        '20px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'body-bold': [
        '18px',
        {
          lineHeight: '140%',
          fontWeight: '700',
        },
      ],
      'body-semibold': [
        '18px',
        {
          lineHeight: '140%',
          fontWeight: '600',
        },
      ],
      'body-medium': [
        '18px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'body-normal': [
        '18px',
        {
          lineHeight: '140%',
          fontWeight: '400',
        },
      ],
      'body1-bold': [
        '18px',
        {
          lineHeight: '140%',
          fontWeight: '700',
        },
      ],
      'base-regular': [
        '16px',
        {
          lineHeight: '140%',
          fontWeight: '400',
        },
      ],
      'base-medium': [
        '16px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'base-semibold': [
        '16px',
        {
          lineHeight: '140%',
          fontWeight: '600',
        },
      ],
      'base1-semibold': [
        '16px',
        {
          lineHeight: '140%',
          fontWeight: '600',
        },
      ],
      'small-regular': [
        '14px',
        {
          lineHeight: '140%',
          fontWeight: '400',
        },
      ],
      'small-medium': [
        '14px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'small-semibold': [
        '14px',
        {
          lineHeight: '140%',
          fontWeight: '600',
        },
      ],
      'subtle-medium': [
        '12px',
        {
          lineHeight: '16px',
          fontWeight: '500',
        },
      ],
      'subtle-semibold': [
        '12px',
        {
          lineHeight: '16px',
          fontWeight: '600',
        },
      ],
      'tiny-medium': [
        '10px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'x-small-semibold': [
        '7px',
        {
          lineHeight: '9.318px',
          fontWeight: '600',
        },
      ],
    },
    extend: {
      // This is where we extend the base css properties or classes, e.g. we can define additional colors apart from the default ones from tailwind.css.
      colors: {
        'primary-5': '#FFF5D8',
        'primary-10': '#FF6600',
        'primary-50': '#E37400',
        'primary-100': '#E87E58',
        'primary-200': '#4253F1',
        'primary-300': '#F9855B',
        'primary-500': '#FF532A',
        'secondary-50': '#C6DAE5',
        'secondary-100': '#E8F0FE',
        'secondary-200': '#F1F9FE',
        'secondary-300': '#004F6D',
        'secondary-500': '#C99C14',
        'red-100': '#FA4969',
        'red-200': '#FF869C',
        'gray-5': '#F5F5F5',
        'gray-10': '#E5E5E5',
        'gray-100': '#E6E9F0',
        'gray-200': '#FFDACC',
        'gray-300': '#423B39',
        'gray-400': '#727274',
        'gray-500': '#423B39',

        blue: '#0095F6',
        'logout-btn': '#FF5A5A',
        'navbar-menu': 'rgba(16, 16, 18, 0.6)',
        'dark-1': '#000000',
        'dark-2': '#121417',
        'dark-3': '#101012',
        'dark-4': '#1F1F22',
        'light-1': '#FFFFFF',
        'light-2': '#EFEFEF',
        'light-3': '#EEEEEE',
        'light-4': '#7878A3',
        'light-5': '#5C5C7B',
        'gray-1': '##F6F8FC',
        'gray-2': '#697C89',
        glassmorphism: 'rgba(16, 16, 18, 0.60)',
      },
      backgroundImage: (theme) => ({
        'gradient-lightgray-1':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 98.35%)',
        'gradient-lightgray-2':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 98.35%)',
        'gradient-lightgray-3':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 98.35%)',
        'gradient-lightgray-4':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 98.35%)',
        'gradient-lightgray-5':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 98.35%)',
        'project-bg-img': 'url(./assets/dev.jpg)',
      }),
      fontFamily: {
        neogrotesque: ['Roboto', 'sans-serif'],
        geometricsans: ['Poppins', 'sans-serif'],
        cursive: ['Great Vibes', 'cursive'],
        rail: ['Raleway', 'sans-serif'],
      },
      content: {
        patternbackground: 'url(./assets/background_pattern_bottom.png)',
      },
    },

    boxShadow: {
      'count-badge': '0px 0px 6px 2px rgba(219, 188, 159, 0.30)',
      'groups-sidebar': '-30px 0px 60px 0px rgba(28, 28, 31, 0.50)',
    },

    // keyframes: {
    //   'accordion-down': {
    //     from: { height: 0 },
    //     to: { height: 'var(--radix-accordion-content-height)' },
    //   },
    //   'accordion-up': {
    //     from: { height: 'var(--radix-accordion-content-height)' },
    //     to: { height: 0 },
    //   },
    // },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
    screens: {
      xs: '400px',
      sm: '768px',
      md: '1060px',
    },
  },

  plugins: [require('tailwindcss-animate')],
};
export default config;
