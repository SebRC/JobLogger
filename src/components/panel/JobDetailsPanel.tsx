import { FunctionComponent } from "react";
import { Job } from "../../data/job/job";
import { DetailsPanel } from "./DetailsPanel";
import { JobForm } from "../form/JobForm";
import { deleteJob } from "../../firebase/firebase";

interface JobDetailsPanelProps {
  job: Job;
  onChange: React.Dispatch<React.SetStateAction<Job>>;
  onClose: () => void;
}

export const JobDetailsPanel: FunctionComponent<JobDetailsPanelProps> = ({ job, onChange, onClose }) => {
  const handleDelete = async () => {
    await deleteJob(job);
    onClose();
  };
  return (
    <DetailsPanel title="Job details" onClose={onClose} onDelete={async () => await handleDelete()}>
      <JobForm job={job} onChange={onChange} />
    </DetailsPanel>
  );
};
