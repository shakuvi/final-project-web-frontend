import { Typography } from "@mui/material";
import React from "react";
import Orders from "./Orders";

export default function FoodOrders() {
  return (
    <div style={{ textAlign: "left" }}>
      <Typography>Orders</Typography>
      <Orders />
    </div>
  );
}
