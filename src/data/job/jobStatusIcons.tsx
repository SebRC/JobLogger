import { CalendarMonth, Celebration, Search, Send, ThumbDown } from "@mui/icons-material";
import { JobStatus } from "./status";
import { ReactNode } from "react";

const iconsMap = new Map<JobStatus, ReactNode>();

iconsMap.set(JobStatus.Applied, <Send />);
iconsMap.set(JobStatus.InterviewScheduled, <CalendarMonth />);
iconsMap.set(JobStatus.NotApplied, <Search />);
iconsMap.set(JobStatus.Rejected, <ThumbDown />);
iconsMap.set(JobStatus.Hired, <Celebration />);

export default iconsMap;
