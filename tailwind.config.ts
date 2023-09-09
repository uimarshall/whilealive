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
    extend: {
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
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    },
  },

  plugins: [],
};
export default config;
