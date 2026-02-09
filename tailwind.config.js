/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./index.html"
];
export const theme = {
  extend: {
    fontFamily: {
      roboto: ['Roboto Mono', 'monospace'],
      gloria: ['Gloria Hallelujah', 'cursive'],
    },
  },
};
export const plugins = [];