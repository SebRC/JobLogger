import { IconButton, Paper, Typography } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";
import { Flexbox } from "../layout/flexbox/Flexbox";
import Close from "@mui/icons-material/Close";

interface DetailsPanelProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export const DetailsPanel: FunctionComponent<DetailsPanelProps> = ({ title, onClose, children }) => {
  return (
    <Paper sx={{ p: "8px", width: "40%" }}>
      <IconButton onClick={onClose} sx={{ position: "absolute", right: 0, zIndex: 2 }}>
        <Close />
      </IconButton>
      <Flexbox gap={16} flexDirection="column">
        <Typography variant="h4" fontWeight={700}>
          {title}
        </Typography>
        {children}
      </Flexbox>
    </Paper>
  );
};
