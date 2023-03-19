import React from "react";
import StatusButton from "../../../../components/order/StatusButton";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
export default function ThreeStatusButtons() {
  return (
    <Grid2 container justifyContent="space-between" spacing={0}>
      <Grid2 item xs={4} sx={{ backgroundColor: "green" }}>
        <StatusButton />
      </Grid2>
      <Grid2 item xs={4}>
        <StatusButton />
      </Grid2>
      <Grid2 item xs={4}>
        <StatusButton />
      </Grid2>
    </Grid2>
  );
}
