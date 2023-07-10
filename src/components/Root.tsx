"use client";

import { ThemeProvider } from "@mui/material";
import { FunctionComponent } from "react";
import { JobTable } from "./table/job/JobTable";
import theme from "../styles/theme";

export const RootComponent: FunctionComponent = ({}) => {
  return (
    <ThemeProvider theme={theme}>
      <JobTable />
    </ThemeProvider>
  );
};
