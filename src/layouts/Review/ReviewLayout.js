import { Typography } from "@mui/material";
import React from "react";
import ReviewTable from "./ReviewTable";

export default function ReviewLayout() {
  return (
    <div style={{ textAlign: "left" }}>
      <Typography>Reviews</Typography>
      <ReviewTable />
    </div>
  );
}
