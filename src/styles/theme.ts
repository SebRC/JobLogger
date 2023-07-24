import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#95cafd",
    },
    secondary: {
      main: "#d4a21e",
    },
    background: {
      default: "#161515",
      paper: "#101012",
    },
  },
});

export default theme;
