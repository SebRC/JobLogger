import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Job } from "../../../data/job/job";
import { database, jobConverter } from "../../../firebase/firebase";

export const useJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  useEffect(() => {
    const jobsCollection = collection(database, "jobs").withConverter(jobConverter);
    const unsub = onSnapshot(jobsCollection, (s) => {
      const newJobs: Job[] = [];
      s.docs.forEach((d) => {
        const data = d.data();
        newJobs.push(data);
      });
      setJobs(newJobs);
    });
    return () => {
      unsub();
    };
  }, []);

  return { jobs: jobs, jobsLoading: jobs.length === 0 };
};
