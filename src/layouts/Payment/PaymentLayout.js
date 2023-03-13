import { Typography } from "@mui/material";
import React from "react";
import PaymentTable from "./PaymentTable";

export default function PaymentLayout() {
  return (
    <div style={{ textAlign: "left" }}>
      <Typography>Payment Info</Typography>
      <PaymentTable />
    </div>
  );
}
