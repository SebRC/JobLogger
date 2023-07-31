import { JobType } from "./jobType";
import { JobStatus } from "./status";

export interface Job {
  position: string;
  company: string;
  status: JobStatus;
  type: JobType;
  address?: string;
  interviewDate?: string;
  link?: string;
  id?: string;
}
