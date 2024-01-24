import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#bf1f43',
        'secondary': 'white',
      },
      fontSize: {
        xs: ['12px', '14px'],
        sm: ['12px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: false,
  },
}
export default config
