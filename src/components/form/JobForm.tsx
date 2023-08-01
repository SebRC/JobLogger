import { FunctionComponent } from "react";
import { Job } from "../../data/job/job";
import { FormControl, InputAdornment, TextField, Typography } from "@mui/material";
import { JobStatus } from "../../data/job/status";
import { Select } from "../select/Select";
import { JobType } from "../../data/job/jobType";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Input } from "../input/Input";
import { NumberInput } from "../input/NumberInput";
import { Search } from "@mui/icons-material";

interface JobFormProps {
  job: Job;
  onChange: React.Dispatch<React.SetStateAction<Job>>;
}

export const JobForm: FunctionComponent<JobFormProps> = ({ job, onChange }) => {
  console.log("link", job.link);
  return (
    <FormControl sx={{ gap: 4 }}>
      <Input
        label="Company"
        placeholder="Company"
        value={job.company}
        onChange={(e) => {
          onChange({ ...job, company: e.target.value });
        }}
      />
      <Input
        label="Role"
        placeholder="Role"
        value={job.position}
        onChange={(e) => {
          onChange({ ...job, position: e.target.value });
        }}
      />
      <NumberInput
        label="Monthly salary expectation"
        placeholder="Salary"
        value={job.monthlySalaryExpectation}
        onChange={(e) => onChange({ ...job, monthlySalaryExpectation: e })}
        InputProps={{
          endAdornment: <InputAdornment position="end">DKK/month</InputAdornment>,
        }}
      />
      <Input
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
        <Input
          label="Address"
          placeholder="Address"
          value={job.address}
          onChange={(e) => {
            onChange({ ...job, address: e.target.value });
          }}
        />
      )}
      {job.status === JobStatus.InterviewScheduled && (
        <>
          <DateTimePicker
            ampm={false}
            value={dayjs(job.interviewDate)}
            onChange={(v) => {
              console.log("value", v);
              onChange({ ...job, interviewDate: v?.toString() });
            }}
          />
        </>
      )}
    </FormControl>
  );
};
