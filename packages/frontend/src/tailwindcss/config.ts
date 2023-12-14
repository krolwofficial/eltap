import { baseColors, textColor } from "./colors";

export const config = {
  prefix: "tw-",
  content: [],
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
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    fontSize: {
      xs: ["13px", { letterSpacing: "-0.1px", lineHeight: "18px" }],
      sm: ["14px", { letterSpacing: "-0.1px", lineHeight: "20px" }],
      md: ["15px", { letterSpacing: "-0.1px", lineHeight: "22px" }],
      lg: ["16px", { letterSpacing: "0.15px", lineHeight: "24px" }],
      xl: ["18px", { letterSpacing: "-0.1px", lineHeight: "26px" }],
      "2xl": ["20px", { letterSpacing: "-0.1px", lineHeight: "28px" }],
      "3xl": ["22px", { letterSpacing: "-1%", lineHeight: "30px" }],
      "4xl": ["28px", { letterSpacing: "-1%", lineHeight: "38px" }],
      "5xl": ["32px", { letterSpacing: "-1%", lineHeight: "40px" }],
      "6xl": ["36px", { letterSpacing: "-2%", lineHeight: "44px" }],
      "7xl": ["48px", { letterSpacing: "-2%", lineHeight: "48px" }],
      "8xl": ["60px", { letterSpacing: "-1%", lineHeight: "60px" }],
      "9xl": ["64px", { letterSpacing: "-2%", lineHeight: "68px" }],
    },
    extend: {
      spacing: {
        "4.5": "18px",
      },
      minWidth: {
        "235": "235px",
      },
      filter: {
        black: "brightness(0)",
      },
    },
  },
  plugins: [],
};
