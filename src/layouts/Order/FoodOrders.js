import { Typography } from "@mui/material";
import React from "react";
import OrderTable from "./OrderTable";

export default function FoodOrders() {
  return (
    <div style={{ textAlign: "left" }}>
      <Typography>Orders</Typography>
      <OrderTable />
    </div>
  );
}
