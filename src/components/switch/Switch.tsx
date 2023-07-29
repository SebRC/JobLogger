import { FormControlLabel, Switch as MaterialSwitch, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { Flexbox } from "../layout/flexbox/Flexbox";

interface SwitchProps {
  label: string;
  value: boolean;
  onChange: () => void;
}

export const Switch: FunctionComponent<SwitchProps> = ({ label, value, onChange }) => {
  return (
    <FormControlLabel
      label={label}
      control={<MaterialSwitch value={value} onChange={onChange} size="medium" />}
      sx={{ width: "100%" }}
    />
  );
};
