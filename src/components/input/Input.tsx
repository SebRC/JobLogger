import { TextField } from "@mui/material";
import { ChangeEventHandler, FunctionComponent } from "react";

interface InputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  placeholder?: string;
}

export const Input: FunctionComponent<InputProps> = (props: InputProps) => {
  return <TextField {...props} />;
};
