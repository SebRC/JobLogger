import { FunctionComponent } from "react";
import { FormControl, InputLabel, Select as MaterialSelect, MenuItem, SelectChangeEvent } from "@mui/material";

interface SelectProps {
  label: string;
  items: string[];
  value: string;
  onChange: (e: SelectChangeEvent<string>) => void;
}

export const Select: FunctionComponent<SelectProps> = ({ label, items, value, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={`${label}-select`}>{label}</InputLabel>
      <MaterialSelect label={label} id={`${label}-select`} value={value} onChange={onChange}>
        {items.map((i) => (
          <MenuItem value={i}>{i}</MenuItem>
        ))}
      </MaterialSelect>
    </FormControl>
  );
};
