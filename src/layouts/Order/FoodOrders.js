import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

const ordercolname = [
  "CustomerID",
  "Order Type",
  "Order Count",
  "Order Date",
  "Order Time",
  "Status",
];

export default function FoodOrders() {
  return (
    <div style={{ textAlign: "left" }}>
      <Typography>Orders</Typography>
      <Grid2 container justifyContent="space-between" pr={5}>
        {ordercolname.map((val, key) => {
          return (
            <Grid2 key={key} items>
              {val}
            </Grid2>
          );
        })}
      </Grid2>
      <Grid2 container justifyContent="space-between" pr={5}></Grid2>
    </div>
  );
}
