import { initializeApp } from "firebase/app";
import {
  DocumentSnapshot,
  SnapshotOptions,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { Job } from "../data/job/job";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getJobs = async (): Promise<Job[]> => {
  const querySnapshot = await getDocs(collection(db, "jobs").withConverter(jobConverter));
  const jobs: Job[] = [];
  querySnapshot.forEach((doc) => {
    jobs.push(doc.data());
  });
  return jobs;
};

export const createJob = async (job: Job) => {
  await addDoc(collection(db, "jobs"), job);
};

export const deleteJob = async (job: Job) => {
  await deleteDoc(doc(db, "jobs", job.id ?? ""));
};

export const updateJob = async (job: Job) => {
  const ref = doc(db, "jobs", job.id ?? "undefined").withConverter(jobConverter);
  await setDoc(ref, job);
};

export const jobConverter = {
  toFirestore: (job: Job) => {
    return {
      ...job,
      company: job.company,
      position: job.position,
      status: job.status,
      type: job.type,
      address: job.address ?? "",
      link: job.link ?? "",
    };
  },
  fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions): Job => {
    const data = snapshot.data(options) as Job;
    return {
      id: snapshot.id,
      company: data.company,
      position: data.position,
      status: data.status,
      type: data.type,
      address: data.address,
      link: data.link,
    };
  },
};
export const database = db;
export default app;
