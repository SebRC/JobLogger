import { DialogTitle, Dialog as MaterialDialog } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { ButtonClose } from "../button/ButtonClose";
import { Button } from "../button/Button";

interface DialogProps {
  title: string;
  onCancel: () => void;
  onSubmit: () => void;
  children: ReactNode;
}

export const Dialog: FunctionComponent<DialogProps> = ({ title, onCancel, onSubmit, children }) => {
  return (
    <MaterialDialog open fullWidth sx={{ width: "lg" }}>
      <Flexbox>
        <DialogTitle>{title}</DialogTitle>
        <ButtonClose onClose={onCancel} />
      </Flexbox>
      <Flexbox gap={2} flexDirection="column" sx={{ padding: "24px" }}>
        {children}
        <Flexbox gap={2}>
          <Button onClick={onSubmit}>Confirm</Button>
          <Button onClick={onCancel} color="secondary">
            Cancel
          </Button>
        </Flexbox>
      </Flexbox>
    </MaterialDialog>
  );
};
