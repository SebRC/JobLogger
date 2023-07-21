"use client";
import { FunctionComponent, ReactNode, useState } from "react";
import { Job } from "../../../data/job/job";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { Flexbox } from "../../layout/flexbox/Flexbox";
import { DetailsPanel } from "../../panel/DetailsPanel";
import { JobStatus } from "../../../data/job/status";
import iconsMap from "../../../data/job/jobStatusIcons";
import { Send } from "@mui/icons-material";

export const JobTable: FunctionComponent = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>();
  const jobs: Job[] = [
    { company: "Company 1", position: "Frontend Developer", status: JobStatus.InterviewScheduled },
    { company: "Company 2", position: "Frontend Engineer", status: JobStatus.Rejected },
    { company: "Company 3", position: "Software Engineer", status: JobStatus.Applied },
  ];

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
      {selectedJob && (
        <DetailsPanel title="Job details" onClose={() => setSelectedJob(null)}>
          <TextField
            sx={{ width: "100%" }}
            label="Company"
            placeholder="Company"
            value={selectedJob.company}
            onChange={(e) => {
              setSelectedJob({ ...selectedJob, company: e.target.value });
            }}
          />
          <TextField
            sx={{ width: "100%" }}
            label="Role"
            placeholder="Role"
            value={selectedJob.position}
            onChange={(e) => {
              setSelectedJob({ ...selectedJob, position: e.target.value });
            }}
          />
          <TextField
            sx={{ width: "100%" }}
            label="Status"
            placeholder="Status"
            value={selectedJob.status}
            onChange={(e) => {
              setSelectedJob({ ...selectedJob, status: e.target.value });
            }}
          />
        </DetailsPanel>
      )}
    </Flexbox>
  );
};
