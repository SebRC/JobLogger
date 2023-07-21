import { FunctionComponent, ReactNode } from "react";
import { Button as MaterialButton, SxProps } from "@mui/material";

interface ButtonProps {
  variant?: "contained" | "outlined" | "text";
  onClick: () => React.MouseEventHandler<HTMLButtonElement>;
  sx?: SxProps;
  children: ReactNode;
}

export const Button: FunctionComponent<ButtonProps> = ({ children, variant = "contained", ...props }) => {
  return (
    <MaterialButton variant={variant} {...props}>
      {children}
    </MaterialButton>
  );
};
