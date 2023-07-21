import { Box } from "@mui/material";
import React, { FunctionComponent, ReactNode } from "react";

interface FlexboxProps {
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?:
    | "normal"
    | "start"
    | "end"
    | "center"
    | "left"
    | "right"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "normal" | "start" | "end" | "center" | "flex-start" | "flex-end" | "stretch";
  overflow?: "visible" | "hidden" | "scroll" | "auto";
  marginBottom?: string;
  marginTop?: string;
  marginRight?: string;
  marginLeft?: string;
  paddingBottom?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingLeft?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  debug?: boolean;
  gap?: string | number;
  children: ReactNode;
}

export const Flexbox: FunctionComponent<FlexboxProps> = ({ debug, flexDirection = "row", gap, children, ...rest }) => {
  return (
    <Box gap={gap} display={"flex"} flexDirection={flexDirection} sx={{ ...rest }}>
      {children}
    </Box>
  );
};
