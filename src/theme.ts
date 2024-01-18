"use client";
import { Montserrat } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const monserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#23A6F0",
      light: "#FFFFFF",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#23856D",
      contrastText: "#BDBDBD",
    },
  },

  typography: {
    fontFamily: monserrat.style.fontFamily,
    h1: {
      fontSize: "4rem",
    },
    h2: {
      fontSize: "2.4rem",
    },
    h3: {
      fontSize: "2rem",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: "62.5%",
        },
      },
    },
  },
});

export default theme;
