import { FunctionComponent, useState } from "react";
import { Dialog } from "./Dialog";
import { createJob } from "../../firebase/firebase";
import { JobForm } from "../form/JobForm";
import { Job } from "../../data/job/job";
import { JobStatus } from "../../data/job/status";
import { JobType } from "../../data/job/jobType";

interface CreateJobDialogProps {
  open: boolean;
  onCancel: () => void;
  onSubmit: () => void;
}

export const CreateJobDialog: FunctionComponent<CreateJobDialogProps> = ({ open, onSubmit, onCancel }) => {
  const [job, setJob] = useState<Job>({
    company: "",
    status: JobStatus.NotApplied,
    position: "",
    type: JobType.OnSite,
    address: "",
    interviewDate: "",
    link: "",
    monthlySalaryExpectation: 0,
  });

  const handleSubmit = async () => {
    await createJob(job);
    onSubmit();
  };

  return (
    <Dialog open={open} title="Create job" onSubmit={async () => await handleSubmit()} onCancel={onCancel}>
      <JobForm job={job} onChange={setJob} />
    </Dialog>
  );
};
