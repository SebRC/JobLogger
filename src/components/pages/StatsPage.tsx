import { Paper, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { Flexbox } from "../layout/flexbox/Flexbox";

export const StatsPage: FunctionComponent = () => {
  return (
    <Paper sx={{ p: "8px" }}>
      <Typography variant="h1">Stats</Typography>
      <Flexbox gap={8} flexDirection="column">
        <Typography>Applied jobs: {32}</Typography>
        <Typography>Interviews scheduled: {2}</Typography>
        <Typography>Rejected applications: {24}</Typography>
        <Typography>Applied jobs {32}</Typography>
      </Flexbox>
    </Paper>
  );
};
