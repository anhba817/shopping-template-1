import { createMuiTheme } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";
import { viVN } from "@material-ui/core/locale";

const theme = (appearance) => createMuiTheme(
  {
    palette: {
      // type: 'dark',
      primary: {
        light: "rgb(0, 219, 176)",
        main: appearance.primaryColor,
        dark: "rgb(1, 112, 90)",
        contrastText: appearance.contrastTextColor,
      },
      secondary: {
        light: "rgb(48, 64, 209)",
        main: appearance.primaryTextColor,
        dark: "rgb(4, 8, 43)",
      },
      warning: {
        main: "#ffc071",
        dark: "#ffb25e",
      },
      error: {
        xLight: red[50],
        main: 'rgb(255, 91, 96)',
        dark: red[700],
      },
      success: {
        xLight: green[50],
        main: green[500],
        dark: green[700],
      },
      text: {
        primary: appearance.primaryTextColor,
      },
      background: {
        default: 'rgb(237, 237, 237)',
        light: 'rgb(228, 244, 252)',
        grey: appearance.secondaryTextColor,
      }
    },
    typography: {
      fontFamily: "'Lato', sans-serif",
      fontWeightLight: 300, // Work Sans
      fontWeightRegular: 400, // Work Sans
      fontWeightMedium: 700, // Roboto Condensed
      fontFamilySecondary: "'Lato', sans-serif",
      textTransform: "none",
      color: appearance.primaryTextColor,
      fontWeight: 700,
      fontSize: 13,
      h2: {
        fontWeight: 700,
        fontSize: 45,
        color: appearance.primaryTextColor,
      },
      h3: {
        color: appearance.secondaryTextColor,
        fontSize: 24,
      },
      h5: {
        color: appearance.primaryTextColor,
        fontSize: 15,
        fontWeight: 700,
      },
      h6: {
        color: appearance.secondaryTextColor,
        fontSize: 13,
      },
      body1: {
        color: appearance.primaryTextColor,
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontSize: 13,
      },
      body2: {
        color: appearance.secondaryTextColor,
        fontFamily: "'Lato', sans-serif",
        fontWeight: 400,
        fontSize: 13,
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 767,
        md: 990,
        lg: 1200,
        xl: 1920,
      },
    },
  },
  viVN
);

export default theme;
