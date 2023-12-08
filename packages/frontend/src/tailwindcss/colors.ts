/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const black = "#000000";
export const white = "#FFFFFF";

export const primary = {
  300: "#386876",
  400: "#1F5565",
  500: "#064254",
  600: "#053543",
};

export const neutralScale = {
  DEFAULT: "#B8B8B8",
  25: "#FCFCFD",
  50: "#FAFBFC",
  100: "#F8F9FB",
  200: "#F9F9F9",
  300: "#F7F7F8",
  400: "#F5F5F5",
  500: "#EFEFF1",
  600: "#EAECF0",
  700: "#DDDFE4",
  800: "#A5ACBA",
  900: "#878D97",
  950: "#6B7B8F",
};

export const grayScale = {
  DEFAULT: "#B8B8B8",
  25: "#919BA7",
  50: "#5F6D7E",
  100: "#49556D",
  200: "#384255",
  300: "#2E3545",
  400: "#333B48",
  500: "#2E3646",
  600: "#2C3444",
  700: "#272D37",
  800: "#252D3C",
  900: "#1C2534",
  950: "#151B28",
};

export const infoScale = {
  DEFAULT: "#B8B8B8",
  25: "#F5FAFF",
  50: "#F5F8FE",
  100: "#E8EFFD",
  200: "#B1CCFB",
  300: "#AEC9FE",
  400: "#648EF7",
  500: "#5390F8",
  600: "#437EF7",
  700: "#3971E7",
  800: "#3E67E3",
  900: "#2B63D9",
  950: "#1B4397",
};

export const errorScale = {
  DEFAULT: "#B8B8B8",
  25: "#FEF6F6",
  50: "#FEF6F6",
  100: "#FFF2F0",
  200: "#FFDBD7",
  300: "#FEB8AE",
  400: "#FD5E49",
  450: "#F15146",
  500: "#F04438",
  600: "#E2341D",
  700: "#B02817",
  900: "#3E2026",
  950: "#3E2026",
};

export const warningScale = {
  DEFAULT: "#B8B8B8",
  25: "#FFF8EB",
  50: "#FFF8EB",
  100: "#FFE4C0",
  200: "#FFDDA1",
  300: "#FFD08A",
  400: "#FFC772",
  500: "#FFAE43",
  600: "#EEA23E",
  700: "#D78100",
  800: "#A15C00",
  900: "#6B3D00",
  950: "#6B3D00",
};

export const successScale = {
  DEFAULT: "#B8B8B8",
  25: "#F0FAF0",
  50: "#F0FAF0",
  100: "#C9EBCB",
  200: "#A6E1A8",
  300: "#93D698",
  400: "#7FD184",
  500: "#5DC264",
  600: "#41AE49",
  700: "#2D8A39",
  800: "#27682C",
  900: "#1A451D",
  950: "#1A451D",
};

export const purpleScale = {
  DEFAULT: "#B8B8B8",
  25: "#ECEBFF",
  50: "#ECEBFF",
  100: "#C7C4FD",
  200: "#ABA7FD",
  300: "#8F89FC",
  400: "#736CFB",
  500: "#5D55F6",
  600: "#574EFA",
  700: "#463EE3",
  800: "#352DC8",
  900: "#33059F",
  950: "#33059F",
};

export const brand = {
  hollywoodCerise: "#DA1259",
  vividCerise: "#EC008C",
  midBlue: "#2F6ABC",
  bluish: "#3871C1",
  pictonBlue: "#50ADE5",
  lightSeaGreen: "#37AB9C",
  appleGreen: "#80CC28",
  leafyGreen: "#40B93C",
  aureolin: "#F2EF1D",
  bitterLemon: "#CCE310",
  cantaloupe: "#F9A72B",
  pumpkinOrange: "#F4711E",
  orangeyRed: "#F14624",
  lavaRed: "#ED1C24",
  lava: "#D91920",
  cardinal: "#BF1B2C",
  zeus: "#231F20",
};

export const baseColors = {
  transparent: "transparent",
  current: "currentColor",
  black,
  white,

  primary: primary,

  error: error,
  warning: warning,
  success: success,

  neutral: grayScale,
  red: redScale,
  orange: neutralScale,
  yellow: yellowScale,
  teal: tealScale,
  blue: blueScale,
  lime: limeScale,
  green: greenScale,
  cyan: cyanScale,
  sky: skyScale,
  indigo: indigoScale,
  purple: purpleScale,
  pink: pinkScale,
  magenta: magentaScale,

  risk: riskColors,
  severity: severityColors,
};

export const iconColor = {
  gray: grayScale[400],
  black: black,
  blue: blueScale[950],
};

export const textColor = {
  default: grayScale[900],
  secondary: grayScale[600],
  disabled: grayScale[400],
  link: blueScale[600],

  ["dark-bg"]: {
    DEFAULT: white,
    secondary: grayScale[500],
    disabled: grayScale[600],
    link: blueScale[300],

    red: redScale[400],
    orange: orangeScale[300],
    yellow: yellowScale[300],
    teal: tealScale[300],
    blue: blueScale[300],
    ["blue-steel"]: blueSteelScale[300],
  },
  ...baseColors,
  risk: riskColors,
  icon: iconColor,
};

export const navBackground = blueSteelScale[900];
