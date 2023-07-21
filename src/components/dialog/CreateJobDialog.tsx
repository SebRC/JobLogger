import { FunctionComponent } from "react";
import { Dialog } from "./Dialog";
import { TextField } from "@mui/material";

interface CreateJobDialogProps {
  onCancel: () => void;
}

export const CreateJobDialog: FunctionComponent<CreateJobDialogProps> = ({ onCancel }) => {
  return (
    <Dialog title="Create job" onCancel={onCancel}>
      <TextField label="Company" placeholder="Company" />
      <TextField label="Position" placeholder="Company" />
      <TextField label="Status" placeholder="Company" />
    </Dialog>
  );
};
