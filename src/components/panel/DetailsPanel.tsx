import { Typography } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { Paper } from "../layout/paper/Paper";
import { ButtonClose } from "../button/ButtonClose";
import { Button } from "../button/Button";

interface DetailsPanelProps {
  title: string;
  onClose: () => void;
  onDelete: () => void;
  children: ReactNode;
}

export const DetailsPanel: FunctionComponent<DetailsPanelProps> = ({ title, onClose, onDelete, children }) => {
  return (
    <Paper sx={{ width: "40%" }}>
      <ButtonClose onClose={onClose} />
      <Flexbox gap={4} flexDirection="column" width="100%">
        <Typography variant="h4" fontWeight={700}>
          {title}
        </Typography>
        {children}
        <Button onClick={onDelete}>Delete</Button>
      </Flexbox>
    </Paper>
  );
};
