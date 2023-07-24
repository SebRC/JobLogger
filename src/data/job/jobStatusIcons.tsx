import { CalendarMonth, Celebration, Search, Send, ThumbDown } from "@mui/icons-material";
import { JobStatus } from "./status";
import { ReactNode } from "react";

const iconsMap = new Map<JobStatus, ReactNode>();

iconsMap.set(JobStatus.Applied, <Send color="warning" />);
iconsMap.set(JobStatus.InterviewScheduled, <CalendarMonth color="info" />);
iconsMap.set(JobStatus.NotApplied, <Search />);
iconsMap.set(JobStatus.Rejected, <ThumbDown color="error" />);
iconsMap.set(JobStatus.Hired, <Celebration color="primary" />);

export default iconsMap;
