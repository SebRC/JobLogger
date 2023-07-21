import { Tabs, Tab, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { TabContent } from "./TabContent";
import { JobTable } from "../../table/job/JobTable";
import { StatsPage } from "../../pages/StatsPage";
import { Button } from "../../button/Button";
import { Paper } from "../../layout/paper/Paper";
import { Flexbox } from "../../layout/flexbox/Flexbox";
import { CreateJobDialog } from "../../dialog/CreateJobDialog";
import { Job } from "../../../data/job/job";
import { createJob } from "../../../firebase/firebase";

export const TabSelector: FunctionComponent = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [showDialog, setShowDialog] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleCreateJobSubmit = async (job: Job) => {
    await createJob(job);
    setShowDialog(false);
  };

  return (
    <>
      <Tabs value={selectedTab} onChange={handleChange} aria-label="basic tabs example" sx={{ mb: "8px" }}>
        <Tab label="Jobs" />
        <Tab label="Stats" />
      </Tabs>
      <TabContent value={selectedTab} index={0}>
        <Flexbox gap={2} flexDirection="column">
          <Paper sx={{ justifyContent: "space-between" }}>
            <Typography>Job table</Typography>
            <Button onClick={() => setShowDialog(true)}>Create job</Button>
          </Paper>
          <JobTable />
          {showDialog && (
            <CreateJobDialog onSubmit={() => setShowDialog(false)} onCancel={() => setShowDialog(false)} />
          )}
        </Flexbox>
      </TabContent>
      <TabContent value={selectedTab} index={1}>
        <StatsPage />
      </TabContent>
    </>
  );
};
