import { FunctionComponent, useState } from "react";
import { Dialog } from "./Dialog";
import { TextField } from "@mui/material";
import { createJob } from "../../firebase/firebase";

interface CreateJobDialogProps {
  onCancel: () => void;
  onSubmit: () => void;
}

export const CreateJobDialog: FunctionComponent<CreateJobDialogProps> = ({ onSubmit, onCancel }) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    await createJob({ company: company, position: position, status: status });
    onSubmit();
  };

  return (
    <Dialog title="Create job" onSubmit={async () => await handleSubmit()} onCancel={onCancel}>
      <TextField label="Company" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
      <TextField
        label="Position"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <TextField label="Status" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
    </Dialog>
  );
};
