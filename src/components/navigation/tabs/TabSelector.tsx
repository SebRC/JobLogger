import { Tabs, Tab } from "@mui/material";
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
import { Switch } from "../../switch/Switch";
import { SearchInput } from "../../input/SearchInput";

export const TabSelector: FunctionComponent = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedSort, setSelectedSort] = useState<JobStatus>(JobStatus.NotApplied);
  const [filterRejected, setFilterRejected] = useState(false);
  const [searchValue, setSearchValue] = useState("");

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
            <Flexbox gap={4} width="80%">
              <SearchInput value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
              <Select
                value={selectedSort}
                items={[
                  JobStatus.InterviewScheduled,
                  JobStatus.NotApplied,
                  JobStatus.Rejected,
                  JobStatus.Applied,
                  JobStatus.Hired,
                ]}
                onChange={(e) => setSelectedSort(e.target.value as JobStatus)}
                label="Sort by"
              />
              <Switch
                label="Filter rejected"
                value={filterRejected}
                onChange={() => setFilterRejected(!filterRejected)}
              />
            </Flexbox>
            <Button onClick={() => setShowDialog(true)}>Create job</Button>
          </Paper>
          <JobTable sort={selectedSort} filterRejected={filterRejected} searchValue={searchValue} />
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
