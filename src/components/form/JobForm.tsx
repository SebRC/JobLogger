import { FunctionComponent } from "react";
import { Job } from "../../data/job/job";
import { FormControl, TextField } from "@mui/material";
import { JobStatus } from "../../data/job/status";
import { Select } from "../select/Select";

interface JobFormProps {
  job: Job;
  onChange: React.Dispatch<React.SetStateAction<Job>>;
}

export const JobForm: FunctionComponent<JobFormProps> = ({ job, onChange }) => {
  return (
    <FormControl sx={{ gap: 2 }}>
      <TextField
        sx={{ width: "100%" }}
        label="Company"
        placeholder="Company"
        value={job.company}
        onChange={(e) => {
          onChange({ ...job, company: e.target.value });
        }}
      />
      <TextField
        sx={{ width: "100%" }}
        label="Role"
        placeholder="Role"
        value={job.position}
        onChange={(e) => {
          onChange({ ...job, position: e.target.value });
        }}
      />
      <Select
        label="Status"
        value={job.status}
        items={[
          JobStatus.NotApplied,
          JobStatus.Applied,
          JobStatus.InterviewScheduled,
          JobStatus.Rejected,
          JobStatus.Hired,
        ]}
        onChange={(e) => onChange({ ...job, status: e.target.value as JobStatus })}
      />
    </FormControl>
  );
};