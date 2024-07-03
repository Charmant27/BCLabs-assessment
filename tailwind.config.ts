import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': "url('/images/BG.png')",
      },
      colors: {
        primary: {
          500: '#000000'
        },
        white: {
          200: '#FFFFFF'
        },
        red: {
          200: '#FF5454'
        },
        green: {
          100: '#6DFFDC',
          200: '#6DFF8B'
        },
        purple: {
          100: '#9945FF'
        },
        blue: {
          100: '#3980FF'
        }
      }
    },
  },
  plugins: [],
};
export default config;
