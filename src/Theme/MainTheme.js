import { createTheme } from "@mui/material";
const mode = "light";
export const theme = createTheme({
  palette: {
    mode: mode,
    background: {
      default: mode === "light" ? "#F9FAFC" : "#333",
    },
    primary: {
      main: "#7D2EEE",
    },
    lightBlue: { lighter: mode === "light" ? "rgb(144, 202, 255,.2)" : "rgb(237, 237, 237,.1)" },
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
