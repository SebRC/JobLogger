import { FunctionComponent } from "react";
import { Dialog } from "./Dialog";
import { TextField } from "@mui/material";

interface CreateJobDialogProps {
  onCancel: () => void;
  onSubmit: () => void;
}

export const CreateJobDialog: FunctionComponent<CreateJobDialogProps> = (props) => {
  return (
    <Dialog title="Create job" {...props}>
      <TextField label="Company" placeholder="Company" />
      <TextField label="Position" placeholder="Company" />
      <TextField label="Status" placeholder="Company" />
    </Dialog>
  );
};
