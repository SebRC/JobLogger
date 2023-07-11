"use client";
import { FunctionComponent, useState } from "react";
import { Job } from "../../../data/job/job";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { Flexbox } from "../../layout/flexbox/Flexbox";
import { DetailsPanel } from "../../panel/DetailsPanel";

export const JobTable: FunctionComponent = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>();
  const jobs: Job[] = [
    { company: "Company 1", position: "Frontend Developer", status: "Interview scheduled" },
    { company: "Company 2", position: "Frontend Engineer", status: "Rejected" },
    { company: "Company 3", position: "Software Engineer", status: "Applied" },
  ];

  return (
    <Flexbox gap={16}>
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
                <TableCell>{j.status}</TableCell>
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
