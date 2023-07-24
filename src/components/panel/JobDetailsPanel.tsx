import { FunctionComponent } from "react";
import { Job } from "../../data/job/job";
import { DetailsPanel } from "./DetailsPanel";
import { JobForm } from "../form/JobForm";

interface JobDetailsPanelProps {
  job: Job;
  onChange: React.Dispatch<React.SetStateAction<Job>>;
  onClose: () => void;
}

export const JobDetailsPanel: FunctionComponent<JobDetailsPanelProps> = ({ job, onChange, onClose }) => {
  return (
    <DetailsPanel title="Job details" onClose={onClose}>
      <JobForm job={job} onChange={onChange} />
    </DetailsPanel>
  );
};
