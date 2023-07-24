import { FunctionComponent } from "react";
import { Select as MaterialSelect, MenuItem, SelectChangeEvent } from "@mui/material";

interface SelectProps {
  items: string[];
}

export const Select: FunctionComponent<SelectProps> = ({ items }) => {
  return (
    <MaterialSelect>
      {items.map((i) => (
        <MenuItem value={i}>{i}</MenuItem>
      ))}
    </MaterialSelect>
  );
};
