import { Paper as MaterialPaper, SxProps } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";

interface PaperProps {
  children: ReactNode;
  gap?: string | number;
  sx?: SxProps;
}

export const Paper: FunctionComponent<PaperProps> = (props) => {
  return (
    <MaterialPaper sx={{ gap: props.gap, p: "8px", display: "flex", ...props.sx }}>{props.children}</MaterialPaper>
  );
};
