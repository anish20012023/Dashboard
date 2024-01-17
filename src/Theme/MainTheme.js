import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#F9FAFC",
    },
    primary: {
      main: "#7D2EEE",
    },
    lightBlue: { lighter: "rgb(144, 202, 255,.2)" },
    formColor: "#C4C4C4",
  },
  typography: {
    h5: {
      padding: "20px 10px",
      fontWeight: "600 !important",
      textTransform: "uppercase",
    },
  },
});

// darktheme

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#333",
    },
    primary: {
      main: "#7D2EEE",
    },
    lightBlue: { lighter: "rgb(237, 237, 237,.1)" },
    formColor: "#C4C4C4",
  },
  typography: {
    h5: {
      padding: "20px 10px",
      fontWeight: "600 !important",
      textTransform: "uppercase",
    },
  },
});
