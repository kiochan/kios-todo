"use client";

import { createTheme } from "@mui/material/styles";
import { cyan, orange } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: cyan[500],
    },
    secondary: {
      main: orange[500],
    },
  },
});
