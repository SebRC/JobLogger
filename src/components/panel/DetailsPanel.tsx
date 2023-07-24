import { Typography } from "@mui/material";
import { FunctionComponent, ReactNode, useState } from "react";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { Paper } from "../layout/paper/Paper";
import { ButtonClose } from "../button/ButtonClose";
import { Button } from "../button/Button";
import { DeleteJobDialog } from "../dialog/DeleteJobDialog";

interface DetailsPanelProps {
  title: string;
  editing: boolean;
  onSave: () => void;
  onClose: () => void;
  onDelete: () => void;
  children: ReactNode;
}

export const DetailsPanel: FunctionComponent<DetailsPanelProps> = ({
  title,
  editing,
  onSave,
  onClose,
  onDelete,
  children,
}) => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <Paper sx={{ width: "40%" }}>
      <ButtonClose onClose={onClose} />
      <Flexbox gap={4} flexDirection="column" width="100%">
        <Typography variant="h4" fontWeight={700}>
          {title}
        </Typography>
        <Flexbox gap={2}>
          {editing && <Button onClick={onSave}>Save</Button>}
          <Button onClick={() => setShowDialog(true)} color="secondary" sx={{ width: "30%" }}>
            Delete
          </Button>
        </Flexbox>
        {children}
      </Flexbox>
      {showDialog && <DeleteJobDialog onCancel={() => setShowDialog(false)} onDelete={onDelete} />}
    </Paper>
  );
};
