import { Paper, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { Flexbox } from "../layout/flexbox/Flexbox";

export const StatsPage: FunctionComponent = () => {
  return (
    <Paper sx={{ p: "8px" }}>
      <Flexbox gap={8} flexDirection="column">
        <Typography variant="h4" fontWeight={700}>
          Stats
        </Typography>
        <Typography>Applied jobs: {32}</Typography>
        <Typography>Interviews scheduled: {2}</Typography>
        <Typography>Rejected applications: {24}</Typography>
        <Typography>Applied jobs {32}</Typography>
      </Flexbox>
    </Paper>
  );
};
