import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          tp: '#3d572f',
          dark: '#2d4022',
          light: '#4a6a38',
        },
        gold: {
          tp: '#d7ae5d',
          light: '#e8c97a',
          dark: '#b8923a',
        },
      },
      fontFamily: {
        title: ['"Inknut Antiqua"', 'serif'],
        body: ['Raleway', 'sans-serif'],
      },
      width: {
        sidebar: '260px',
      },
    },
  },
  plugins: [],
}

export default config
