import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import Logout from "../../../components/common/TopNavBar/Logout";
import NotificationIcon from "../../../components/common/TopNavBar/NotificationIcon";

export default function LogoutNotification() {
  return (
    <div>
      <Grid2 container alignItems="center" spacing={2}>
        <Grid2 item>
          <Logout />
        </Grid2>
        <Grid2 item>
          <NotificationIcon />
        </Grid2>
      </Grid2>
    </div>
  );
}
