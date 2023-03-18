import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import Profile from "./TopNavBar/Profile";
import LogoutNotification from "./TopNavBar/LogoutNotification";

export default function TopNavBar() {
  return (
    <div>
      <Grid2
        container
        justifyContent="space-between"
        sx={{
          backgroundColor: "#FFD18F",
          height: "75px",
          alignItems: "center",
        }}
      >
        <Grid2 Item pl={3}>
          <Profile />
        </Grid2>
        <Grid2 Item pr={8}>
          <LogoutNotification />
        </Grid2>
      </Grid2>
    </div>
  );
}
