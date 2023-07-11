"use client";
import { FunctionComponent, useState } from "react";
import { Job } from "../../../data/job/job";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Flexbox } from "../../layout/flexbox/Flexbox";
import { DetailsPanel } from "../../panel/DetailsPanel";

export const JobTable: FunctionComponent = () => {
  const [showDetails, setShowDetails] = useState(false);
  const jobs: Job[] = [
    { company: "Company 1", position: "Frontend Developer", status: "Interview scheduled" },
    { company: "Company 2", position: "Frontend Engineer", status: "Rejected" },
    { company: "Company 3", position: "Software Engineer", status: "Applied" },
  ];

  return (
    <Flexbox gap={16}>
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
              <TableRow sx={{ "&:hover": { cursor: "pointer" } }} onClick={() => setShowDetails(!showDetails)}>
                <TableCell>{j.company}</TableCell>
                <TableCell>{j.position}</TableCell>
                <TableCell>{j.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {showDetails && <DetailsPanel />}
    </Flexbox>
  );
};
