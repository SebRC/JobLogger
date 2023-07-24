import { FunctionComponent, useState } from "react";
import { Job } from "../../data/job/job";
import { TextField } from "@mui/material";
import { JobStatus } from "../../data/job/status";
import { DetailsPanel } from "./DetailsPanel";

interface JobDetailsPanelProps {
  job: Job;
  onClose: () => void;
}

export const JobDetailsPanel: FunctionComponent<JobDetailsPanelProps> = ({ job, onClose }) => {
  const [selectedJob, setSelectedJob] = useState(job);

  return (
    <DetailsPanel title="Job details" onClose={onClose}>
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
          setSelectedJob({ ...selectedJob, status: e.target.value as JobStatus });
        }}
      />
    </DetailsPanel>
  );
};
