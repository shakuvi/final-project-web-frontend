import { Typography } from "@mui/material";
import React from "react";
import User from "./User";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import UserButton from "../../components/user/UserButton";

export default function UserLayout() {
  return (
    <div style={{ textAlign: "left" }}>
      <Grid2 container justifyContent="space-between" pr={8}>
        <Grid2 item>
          <Typography>User</Typography>
        </Grid2>
        <Grid2 item>
          <UserButton />
        </Grid2>
      </Grid2>
      <User />
    </div>
  );
}
