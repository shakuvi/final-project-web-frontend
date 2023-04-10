import React from "react";
import {
  Drawer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import UserDrawer from "./UserDrawer";

const rows = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Bob", age: 35 },
];

export default function UserList() {
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell>Order Type</TableCell>
            <TableCell>Order Date</TableCell>
            <TableCell>Order Time</TableCell>
            <TableCell>Order Count</TableCell>
            <TableCell>Order Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, key) => (
            <TableRow
              key={key}
              hover
              onClick={() => {
                setSelectedRow(row);
                toggleDrawer();
              }}
              style={selectedRow === row ? { backgroundColor: "#F8E6CC" } : {}}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            backgroundColor: "#F7EEE2",
          },
        }}
        sx={{
          "& .MuiBackdrop-root": {
            backgroundColor: "transparent",
          },
        }}
      >
        <UserDrawer />
        <div style={{ width: 450 }}></div>
      </Drawer>
    </div>
  );
}
