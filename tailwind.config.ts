import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': {
          '50': '#e5f8ed',
          '100': '#d7f4e2',
          '200': '#b2e8c9',
          '300': '#7fd6aa',
          '400': '#4bbc87',
          '500': '#28a16c',
          '600': '#1a8156',
          '700': '#156747',
          '800': '#135239',
          '900': '#104430',
          '950': '#08261c',
        },
        'primary': {
          '50': '#f5f8f5',
          '100': '#dfe8e0',
          '200': '#bed1c2',
          '300': '#95b39b',
          '400': '#6f9278',
          '500': '#55775f',
          '600': '#425f4a',
          '700': '#384d3f',
          '800': '#2f4034',
          '900': '#2c3930',
          '950': '#151e18',
        },
        'secondary': {
          '50': '#f6f4f0',
          '100': '#e9e3d8',
          '200': '#d5c6b3',
          '300': '#bda387',
          '400': '#a98766',
          '500': '#a27b5c',
          '600': '#845f4a',
          '700': '#6b4a3d',
          '800': '#5b4038',
          '900': '#503833',
          '950': '#2d1d1b',
        },
        'accent': {
          '50': '#f8f7f4',
          '100': '#efede5',
          '200': '#dcd7c9',
          '300': '#c7bfaa',
          '400': '#b0a187',
          '500': '#a08d6f',
          '600': '#937d63',
          '700': '#7b6753',
          '800': '#655547',
          '900': '#53463b',
          '950': '#2c241e',
        },
      },
      fontFamily: {
        museoModerno: ["var(--font-museoModerno)"],
        cairo: ["var(--font-cairo)"],
      },
    },
  },
  plugins: [],
};
export default config;
