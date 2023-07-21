import { JobStatus } from "./status";

export interface Job {
  position: string;
  company: string;
  status: JobStatus;
}
