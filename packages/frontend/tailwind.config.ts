import type { Config } from "tailwindcss";
const tailwind = require("./src/tailwindcss/config.ts");

const config: Config = {
  ...tailwind.config,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
export default config;
