"use client";

import { ThemeProvider } from "@mui/material";
import { FunctionComponent } from "react";
import theme from "../styles/theme";
import { TabSelector } from "./navigation/tabs/TabSelector";

export const RootComponent: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <TabSelector />
    </ThemeProvider>
  );
};
