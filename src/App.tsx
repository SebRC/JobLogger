import { AppBar, ThemeProvider, Toolbar, Typography } from "@mui/material";
import theme from "./styles/theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Page } from "./components/layout/page/Page";
import { TabSelector } from "./components/navigation/tabs/TabSelector";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Job logger</Typography>
          </Toolbar>
        </AppBar>
        <Page>
          <TabSelector />
        </Page>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
