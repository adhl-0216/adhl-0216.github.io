import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f0f9f3',
          '100': '#dbf0e1',
          '200': '#bae0c6',
          '300': '#9cd0b1',
          '400': '#5cab7e',
          '500': '#3a8f62',
          '600': '#29724c',
          '700': '#215b3e',
          '800': '#1c4933',
          '900': '#183c2b',
          '950': '#0d2118',
        },
        'secondary': {
          '50': '#f3f6fc',
          '100': '#e6eef8',
          '200': '#c8dbef',
          '300': '#97bde2',
          '400': '#5f9bd1',
          '500': '#3b7ebc',
          '600': '#2a639f',
          '700': '#214b79',
          '800': '#21456b',
          '900': '#203b5a',
          '950': '#15253c',
        },
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
        'accent': {
          '50': '#f1f8fa',
          '100': '#dceef1',
          '200': '#bddde4',
          '300': '#90c5d0',
          '400': '#66a9ba',
          '500': '#40879a',
          '600': '#376f83',
          '700': '#325b6c',
          '800': '#304d5a',
          '900': '#2c424d',
          '950': '#192a33',
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
