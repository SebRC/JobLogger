import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#292d50",
    },
    secondary: {
      main: "#bd90f5",
    },
    background: {
      default: "#ffffff",
      paper: "#e0f7fa",
    },
  },
});

export default theme;
