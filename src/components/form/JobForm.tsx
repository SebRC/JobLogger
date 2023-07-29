import { FunctionComponent } from "react";
import { Job } from "../../data/job/job";
import { FormControl, TextField } from "@mui/material";
import { JobStatus } from "../../data/job/status";
import { Select } from "../select/Select";
import { JobType } from "../../data/job/jobType";
import { DatePicker } from "@mui/x-date-pickers";

interface JobFormProps {
  job: Job;
  onChange: React.Dispatch<React.SetStateAction<Job>>;
}

export const JobForm: FunctionComponent<JobFormProps> = ({ job, onChange }) => {
  return (
    <FormControl sx={{ gap: 4 }}>
      <TextField
        label="Company"
        placeholder="Company"
        value={job.company}
        onChange={(e) => {
          onChange({ ...job, company: e.target.value });
        }}
      />
      <TextField
        label="Role"
        placeholder="Role"
        value={job.position}
        onChange={(e) => {
          onChange({ ...job, position: e.target.value });
        }}
      />
      <TextField
        label="Link"
        placeholder="Link"
        value={job.link}
        onChange={(e) => {
          onChange({ ...job, link: e.target.value });
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
      <Select
        label="Type"
        value={job.type}
        items={[JobType.Remote, JobType.Hybrid, JobType.OnSite]}
        onChange={(e) => onChange({ ...job, type: e.target.value as JobType })}
      />
      {(job.type === JobType.Hybrid || job.type === JobType.OnSite) && (
        <TextField
          label="Address"
          placeholder="Address"
          value={job.address}
          onChange={(e) => {
            onChange({ ...job, address: e.target.value });
          }}
        />
      )}
      <DatePicker />
    </FormControl>
  );
};
