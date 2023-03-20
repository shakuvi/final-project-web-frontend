import { Avatar, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import ThreeStatusButtons from "./Progress/ThreeStatusButtons";

export default function DrawerProgress() {
  return (
    <Grid2 container alignItems="center">
      <Grid2 item xs={2}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
      </Grid2>
      <Grid2 item xs={10}>
        <div style={{ paddingBottom: 12 }}>
          <Typography>Order Number</Typography>
        </div>
        <ThreeStatusButtons />
      </Grid2>
    </Grid2>
  );
}
