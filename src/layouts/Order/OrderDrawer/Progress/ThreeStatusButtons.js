import React from "react";
import StatusButton from "../../../../components/order/StatusButton";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
export default function ThreeStatusButtons() {
  return (
    <div>
      <Grid2 container>
        <StatusButton />
        <StatusButton />
        <StatusButton />
      </Grid2>
    </div>
  );
}
