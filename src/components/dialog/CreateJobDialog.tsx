import { FunctionComponent, useState } from "react";
import { Dialog } from "./Dialog";
import { createJob } from "../../firebase/firebase";
import { JobForm } from "../form/JobForm";
import { Job } from "../../data/job/job";
import { JobStatus } from "../../data/job/status";
import { JobType } from "../../data/job/jobType";

interface CreateJobDialogProps {
  onCancel: () => void;
  onSubmit: () => void;
}

export const CreateJobDialog: FunctionComponent<CreateJobDialogProps> = ({ onSubmit, onCancel }) => {
  const [job, setJob] = useState<Job>({
    company: "",
    status: JobStatus.NotApplied,
    position: "",
    type: JobType.OnSite,
  });

  const handleSubmit = async () => {
    await createJob(job);
    onSubmit();
  };

  return (
    <Dialog title="Create job" onSubmit={async () => await handleSubmit()} onCancel={onCancel}>
      <JobForm job={job} onChange={setJob} />
    </Dialog>
  );
};
