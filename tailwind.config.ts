import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'spin-low': {
            '0%': {
              rotate: '0deg',
            },
            '100%': {
              rotate: '360deg',
            }
        }
      },

      colors : {
        'primary': '#319791'
      },
    
      animation:{
        'spin-low': 'spin-low 7s linear infinite'
      },

      screens: {
        'md/lg': '860px'
      }
    },
  },

  plugins: [],
}
export default config
