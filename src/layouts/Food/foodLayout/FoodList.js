import React from "react";
import {
  Drawer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import FoodDrawer from "./FoodDrawer";

export default function FoodList({ allFoods: rows, handleFoodSelect }) {
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
          {rows.map((val, key) => (
            <TableRow
              key={key}
              hover
              onClick={() => {
                setSelectedRow(val);
                handleFoodSelect(val);
                toggleDrawer();
              }}
              style={selectedRow === val ? { backgroundColor: "#F8E6CC" } : {}}
            >
              <TableCell>{val.name}</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Name</TableCell>
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
        <FoodDrawer />
        <div style={{ width: 450 }}></div>
      </Drawer>
    </div>
  );
}
