import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import Profile from "./TopNavBar/Profile";
import NotificationIcon from "../../components/common/TopNavBar/NotificationIcon";

export default function TopNavBar() {
  return (
    <div>
      <Grid2
        container
        justifyContent="flex-end"
        sx={{ backgroundColor: "#FFD18F" }}
      >
        <Grid2 Item pr={3}>
          <Profile />
        </Grid2>
        <Grid2 Item pr={8}>
          <NotificationIcon />
        </Grid2>
      </Grid2>
    </div>
  );
}
