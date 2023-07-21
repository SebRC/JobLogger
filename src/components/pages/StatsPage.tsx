import { Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { Paper } from "../layout/paper/Paper";

export const StatsPage: FunctionComponent = () => {
  return (
    <Paper>
      <Flexbox gap={2} flexDirection="column">
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
