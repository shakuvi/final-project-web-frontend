import React from "react";
import { Typography } from "@mui/material";
import FoodTable from "./FoodTable";

export default function FoodLayout() {
  return (
    <div style={{ textAlign: "left", paddingRight: "20px" }}>
      <Typography>Food Order</Typography>
      <FoodTable />
    </div>
  );
}
