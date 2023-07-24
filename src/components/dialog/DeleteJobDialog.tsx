import { FunctionComponent } from "react";
import { Dialog } from "./Dialog";
import { Typography } from "@mui/material";

interface DeleteJobDialogProps {
  onDelete: () => void;
  onCancel: () => void;
}

export const DeleteJobDialog: FunctionComponent<DeleteJobDialogProps> = ({ onDelete, onCancel }) => {
  return (
    <Dialog open title="Delete job" onSubmit={onDelete} onCancel={onCancel}>
      <Typography>Are you sure you want to delete this job?</Typography>
    </Dialog>
  );
};
