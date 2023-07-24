"use client";
import { FunctionComponent, useState } from "react";
import { Job } from "../../../data/job/job";
import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper as MaterialPaper,
} from "@mui/material";
import { Flexbox } from "../../layout/flexbox/Flexbox";
import iconsMap from "../../../data/job/jobStatusIcons";
import { useJobs } from "../../hooks/job/useJobs";
import { JobDetailsPanel } from "../../panel/JobDetailsPanel";
import { Paper } from "../../layout/paper/Paper";

export const JobTable: FunctionComponent = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>();
  const { jobs, jobsLoading } = useJobs();
  return jobsLoading ? (
    <Paper sx={{ justifyContent: "center", height: "70vh", alignItems: "center" }}>
      <CircularProgress />
    </Paper>
  ) : (
    <Flexbox gap={2}>
      <TableContainer component={MaterialPaper}>
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
                <TableCell>{j.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedJob && (
        <JobDetailsPanel job={selectedJob} onClose={() => setSelectedJob(null)} onChange={setSelectedJob} />
      )}
    </Flexbox>
  );
};
