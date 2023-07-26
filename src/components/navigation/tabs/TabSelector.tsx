import { Tabs, Tab, Typography, Box } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { TabContent } from "./TabContent";
import { JobTable } from "../../table/job/JobTable";
import { StatsPage } from "../../pages/StatsPage";
import { Button } from "../../button/Button";
import { Paper } from "../../layout/paper/Paper";
import { Flexbox } from "../../layout/flexbox/Flexbox";
import { CreateJobDialog } from "../../dialog/CreateJobDialog";
import { Select } from "../../select/Select";
import { JobStatus } from "../../../data/job/status";

export const TabSelector: FunctionComponent = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<JobStatus>(JobStatus.NotApplied);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Tabs value={selectedTab} onChange={handleChange} aria-label="basic tabs example" sx={{ mb: "8px" }}>
        <Tab label="Jobs" />
        <Tab label="Stats" />
      </Tabs>
      <TabContent value={selectedTab} index={0}>
        <Flexbox gap={2} flexDirection="column">
          <Paper sx={{ justifyContent: "space-between", p: "16px", alignItems: "center" }}>
            <Flexbox width="30%">
              <Select
                value={selectedFilter}
                items={[
                  JobStatus.InterviewScheduled,
                  JobStatus.NotApplied,
                  JobStatus.Rejected,
                  JobStatus.Applied,
                  JobStatus.Hired,
                ]}
                onChange={(e) => setSelectedFilter(e.target.value as JobStatus)}
                label="Filter"
              />
            </Flexbox>
            <Button onClick={() => setShowDialog(true)}>Create job</Button>
          </Paper>
          <JobTable filter={selectedFilter} />
          {showDialog && (
            <CreateJobDialog
              open={showDialog}
              onSubmit={() => setShowDialog(false)}
              onCancel={() => setShowDialog(false)}
            />
          )}
        </Flexbox>
      </TabContent>
      <TabContent value={selectedTab} index={1}>
        <StatsPage />
      </TabContent>
    </>
  );
};
