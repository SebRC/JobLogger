import { AppBar, Button, ThemeProvider, Toolbar, Typography } from "@mui/material";
import theme from "./styles/theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Page } from "./components/layout/page/Page";
import { TabSelector } from "./components/navigation/tabs/TabSelector";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Job search
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Page>
        <TabSelector />
      </Page>
    </ThemeProvider>
  );
}

export default App;
