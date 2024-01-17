import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./Common/router";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "./Theme/MainTheme";

function App() {
  const mode = useSelector((state) => state.mode.theme);
  return (
    <ThemeProvider theme={!mode ? lightTheme : darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
