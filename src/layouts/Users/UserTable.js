import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Profile from "../common/TopNavBar/Profile";

const createData = (customer, type, count, date, time, status) => {
  return { customer, type, count, date, time, status };
};

const rows = [createData(<Profile />, 159, 6.0, 24, 4.0, 9)];

export default function UserTable() {
  return (
    <div>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell align="left">Order Type</TableCell>
              <TableCell align="left">Order Count</TableCell>
              <TableCell align="left">Order Date</TableCell>
              <TableCell align="left">Order Time</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, key) => (
              <TableRow
                key={key}
                sx={{ ":hover": { backgroundColor: "#F8E6CC" } }}
              >
                <TableCell component="th" scope="row">
                  {row.customer}
                </TableCell>
                <TableCell align="left">{row.type}</TableCell>
                <TableCell align="left">{row.count}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{row.time}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
