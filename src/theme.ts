"use client";
import { Montserrat } from "next/font/google";
import { Breakpoints, createTheme } from "@mui/material/styles";

const monserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  breakpoints: {
    values: {
      base: 0,
      xs: 400,
      sm: 700,
      md: 1000,
      lg: 1200,
      xl: 1300,
      xxl: 1400,
    },
  } as Breakpoints & { values: { base: number; xxl: number } },
  palette: {
    primary: {
      main: "#23A6F0",
      light: "#FFFFFF",
      contrastText: "#FAFAFA",
    },
    secondary: {
      main: "#23856D",
      dark: "#252B42",
      contrastText: "#BDBDBD",
    },
    info: {
      main: "#737373",
      contrastText: "#2DC071",
      light: "#8EC2F2",
    },
  },

  typography: {
    fontFamily: monserrat.style.fontFamily,
    h1: {
      fontSize: "clamp(3rem, 4vw, 4rem)",
      fontWeight: 700,
    },
    h2: {
      fontSize: "clamp(2rem, 3vw, 2.4rem)",
      fontWeight: 700,
    },
    h3: {
      fontSize: "clamp(1.8rem, 2vw, 2rem)",
    },
    h4: {
      fontSize: "1.6rem",
    },
    subtitle1: {
      fontSize: "1.4rem",
    },
    subtitle2: {
      fontSize: "1.2rem",
      fontWeight: 400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: "62.5%",
        },
        "span, p, a": {
          fontSize: "1.4rem",
        },
      },
    },
  },
});

export default theme;
