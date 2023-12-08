import { baseColors, textColor } from "./colors";

export const config = {
  prefix: "tw-",
  content: [],
  darkMode: "class",
  theme: {
    screens: {
      sm: "744px",
      // => @media (min-width: 744px) { ... }
      md: "1440px",
      // => @media (min-width: 1440px) { ... }
      lg: "1600px",
      // => @media (min-width: 1600px) { ... }
    },
    colors: {
      ...baseColors,
    },
    textColor,
  },
  plugins: [],
};
