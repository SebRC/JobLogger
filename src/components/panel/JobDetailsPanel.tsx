import { FunctionComponent, useState } from "react";
import { Job } from "../../data/job/job";
import { DetailsPanel } from "./DetailsPanel";
import { JobForm } from "../form/JobForm";
import { deleteJob, updateJob } from "../../firebase/firebase";

interface JobDetailsPanelProps {
  job: Job;
  onChange: React.Dispatch<React.SetStateAction<Job>>;
  onClose: () => void;
}

export const JobDetailsPanel: FunctionComponent<JobDetailsPanelProps> = ({ job, onChange, onClose }) => {
  const [editing, setEditing] = useState(false);

  const handleDelete = async () => {
    await deleteJob(job);
    onClose();
  };

  const handleSave = async () => {
    setEditing(false);
    await updateJob(job);
  };

  return (
    <DetailsPanel
      title="Job details"
      editing={editing}
      onSave={handleSave}
      onClose={onClose}
      onDelete={async () => await handleDelete()}
    >
      <JobForm
        job={job}
        onChange={(j) => {
          setEditing(true);
          onChange(j);
        }}
      />
    </DetailsPanel>
  );
};
