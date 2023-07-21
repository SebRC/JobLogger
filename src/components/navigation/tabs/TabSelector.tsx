import { Tabs, Tab, Box } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { TabContent } from "./TabContent";
import { JobTable } from "../../table/job/JobTable";
import { StatsPage } from "../../pages/StatsPage";
import { Button } from "../../button/Button";
import { Paper } from "../../layout/paper/Paper";
import { Flexbox } from "../../layout/flexbox/Flexbox";

export const TabSelector: FunctionComponent = () => {
  const [selectedTab, setSelectedTab] = useState(0);

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
          <Paper sx={{ justifyContent: "flex-end" }}>
            <Button onClick={() => console.log("")}>Bla</Button>
          </Paper>
          <JobTable />
        </Flexbox>
      </TabContent>
      <TabContent value={selectedTab} index={1}>
        <StatsPage />
      </TabContent>
    </>
  );
};
