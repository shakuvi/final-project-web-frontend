import React from "react";

import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function Orders() {
  return (
    <div>
      <Grid2 container justifyContent={"space-between"}>
        <Typography>Customer</Typography>
        <Typography>Order Type</Typography>
        <Typography>Order Date</Typography>
        <Typography>Order Time</Typography>
        <Typography>Order Items</Typography>
        <Typography>Order Status</Typography>
      </Grid2>
    </div>
  );
}
