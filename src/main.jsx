import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const typograhyHeading = {
  fontFamily: "DM Sans",
  letterSpacing: "unset",
  lineHeight: "unset",
  fontWeight: 700,
};
const theme = createTheme({
  breakpoints: {
    keys: ["xs", "sm", "tablet", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      tablet: 768,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#3D00B7",
      dark: "#371C87",
      light: "#4F33A3",
      contrastText: "#5539A8",
    },
    success: {
      main: "#00AC4F",
      contrastText: "#14C8B0",
    },
    danger: {
      main: "#FF002E",
    },
    info: {
      main: "#2639ED",
    },
    secondary: {
      main: "#5539A8",
      light: "#4F33A3",
      dark: "#959595",
      contrastText: "rgba(220, 220, 220, 0.20)",
    },
    muted: {
      main: "#636363",
      light: "#757575",
      dark: "#363639",
      contrastText: "#838383",
    },
    text: {
      primary: "#000000",
      secondary: "#565656",
      disabled: "#696969",
    },
  },
  typography: {
    fontFamily: [
      "DM Sans",
      "Integral CF",
      "Averta Demo PE Cutted Demo",
      "Poppins",
    ].join(),
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h2: {
      ...typograhyHeading,
      fontSize: "2.5rem",
      fontFamily: "Integral CF",
      letterSpacing: "0.125rem",
    },
    h3: {
      ...typograhyHeading,
      fontSize: "2.125rem",
      fontFamily: "Integral CF",
    },
    h4: {
      ...typograhyHeading,
      fontSize: "2rem",
      fontFamily: "Integral CF",
    },
    h5: {
      ...typograhyHeading,
      fontSize: "1.75rem",
      fontFamily: "Integral CF",
    },
    h6: {
      ...typograhyHeading,
      fontSize: "1.25rem",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
