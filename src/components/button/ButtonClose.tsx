import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { FunctionComponent } from "react";

interface ButtonCloseProps {
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonClose: FunctionComponent<ButtonCloseProps> = ({ onClose }) => {
  return (
    <IconButton onClick={onClose} sx={{ position: "absolute", right: 4, zIndex: 2 }}>
      <Close />
    </IconButton>
  );
};
