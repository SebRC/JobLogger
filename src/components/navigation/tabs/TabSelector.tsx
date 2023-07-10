import { Box, Tabs, Tab } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { TabContent } from "./TabContent";
import { JobTable } from "../../table/job/JobTable";

export const TabSelector: FunctionComponent = ({}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={selectedTab} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
      <TabContent value={selectedTab} index={0}>
        <JobTable />
      </TabContent>
    </>
  );
};
