import React from "react";
import StatusButton from "../../../../components/order/StatusButton";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
export default function ThreeStatusButtons() {
  const statusButton = [
    { name: "Preparering" },
    { name: "completed" },
    { name: "Delivered " },
  ];

  return (
    <Grid2 container justifyContent="space-between" spacing={0}>
      {statusButton.map((val, key) => {
        return (
          <Grid2 item xs={4} key={key}>
            <StatusButton info={val} />
          </Grid2>
        );
      })}
    </Grid2>
  );
}
