import { Typography } from "@mui/material";
import React from "react";
import OrderTabs from "./OrderTabs";

export default function OrderDrawer() {
  return (
    <div>
      <div style={{ paddingLeft: 10 }}>
        <Typography>Order Details</Typography>
      </div>

      <div style={{ marginTop: 12, paddingLeft: 10 }}>
        <OrderTabs />
      </div>
    </div>
  );
}
