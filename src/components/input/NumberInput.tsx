import { FilledInputProps, InputProps, OutlinedInputProps, TextField } from "@mui/material";
import { ChangeEvent, FunctionComponent } from "react";

interface NumberInputProps {
  value: number;
  onChange: (newValue: number) => void;
  label?: string;
  placeholder?: string;
  InputProps?: Partial<FilledInputProps> | Partial<OutlinedInputProps> | Partial<InputProps> | undefined;
}

export const NumberInput: FunctionComponent<NumberInputProps> = (props: NumberInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9\b]+$/;
    if (!e.target.value) {
      props.onChange(0);
      return;
    }
    if (regex.test(e.target.value)) {
      props.onChange(parseInt(e.target.value));
    }
  };
  return <TextField {...props} onChange={handleChange} />;
};
