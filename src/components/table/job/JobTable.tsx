"use client";
import { FunctionComponent } from "react";
import { Job } from "../../../data/job/job";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from "@mui/material";
import theme from "../../../styles/theme";
interface JobTableProps {}

export const JobTable: FunctionComponent<JobTableProps> = ({}) => {
  const jobs: Job[] = [
    { company: "Company 1", position: "Frontend Developer", status: "Interview scheduled" },
    { company: "Company 2", position: "Frontend Engineer", status: "Rejected" },
    { company: "Company 3", position: "Software Engineer", status: "Applied" },
  ];
  const theme = useTheme();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs.map((j) => (
            <TableRow sx={{ "&:hover": { cursor: "pointer" } }}>
              <TableCell>{j.company}</TableCell>
              <TableCell>{j.position}</TableCell>
              <TableCell>{j.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
