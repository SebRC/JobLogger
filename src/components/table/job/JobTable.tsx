"use client";
import { FunctionComponent, useMemo, useState } from "react";
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
import { JobStatus } from "../../../data/job/status";
interface JobTableProps {
  sort: JobStatus;
  filterRejected: boolean;
}

export const JobTable: FunctionComponent<JobTableProps> = ({ sort, filterRejected }) => {
  const [selectedJob, setSelectedJob] = useState<Job | null>();
  const { jobs, jobsLoading } = useJobs();

  const filteredJobs = useMemo(() => {
    return filterRejected ? jobs.filter((j) => j.status !== JobStatus.Rejected) : jobs;
  }, [filterRejected, jobs]);

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
              <TableCell>Type</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredJobs
              .sort((j) => {
                if (j.status === sort) {
                  return -1;
                }
                return 1;
              })
              .map((j) => (
                <TableRow
                  sx={{ "&:hover": { cursor: "pointer" } }}
                  onClick={() => setSelectedJob(j)}
                  key={`${j.company}-${j.id ?? ""}`}
                >
                  <TableCell>{j.company}</TableCell>
                  <TableCell>{j.position}</TableCell>
                  <TableCell>
                    <Flexbox gap={2}>
                      {iconsMap.get(j.status)}
                      {j.status}
                    </Flexbox>
                  </TableCell>
                  <TableCell>{j.type}</TableCell>
                  <TableCell>{j.address}</TableCell>
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
