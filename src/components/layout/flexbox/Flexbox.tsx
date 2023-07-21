import { Box, SxProps } from "@mui/material";
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
  height?: string;
  width?: string;
  debug?: boolean;
  gap?: string | number;
  sx?: SxProps;
  children: ReactNode;
}

export const Flexbox: FunctionComponent<FlexboxProps> = ({
  debug,
  flexDirection = "row",
  gap = "normal",
  children,
  sx,
  ...rest
}) => {
  return (
    <Box gap={gap} display={"flex"} position={"relative"} flexDirection={flexDirection} {...rest} sx={{ ...sx }}>
      {children}
    </Box>
  );
};
