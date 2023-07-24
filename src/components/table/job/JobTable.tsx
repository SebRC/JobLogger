"use client";
import { FunctionComponent, useState } from "react";
import { Job } from "../../../data/job/job";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { Flexbox } from "../../layout/flexbox/Flexbox";
import { DetailsPanel } from "../../panel/DetailsPanel";
import { JobStatus } from "../../../data/job/status";
import iconsMap from "../../../data/job/jobStatusIcons";
import { useJobs } from "../../hooks/job/useJobs";
import { JobDetailsPanel } from "../../panel/JobDetailsPanel";

export const JobTable: FunctionComponent = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>();
  const { jobs, jobsLoading } = useJobs();

  return (
    <Flexbox gap={2}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs.map((j) => (
              <TableRow sx={{ "&:hover": { cursor: "pointer" } }} onClick={() => setSelectedJob(j)}>
                <TableCell>{j.company}</TableCell>
                <TableCell>{j.position}</TableCell>
                <TableCell>
                  <Flexbox gap={2}>
                    {iconsMap.get(j.status)}
                    {j.status}
                  </Flexbox>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedJob && <JobDetailsPanel job={selectedJob} onClose={() => setSelectedJob(null)} />}
    </Flexbox>
  );
};
