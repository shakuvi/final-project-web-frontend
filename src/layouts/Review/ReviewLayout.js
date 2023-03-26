import { Typography } from "@mui/material";
import React from "react";
import Review from "./Review";

export default function ReviewLayout() {
  return (
    <div style={{ textAlign: "left" }}>
      <Typography>Reviews</Typography>
      <div style={{ paddingTop: 15, paddingRight: 20 }}>
        <Review />
      </div>
    </div>
  );
}
