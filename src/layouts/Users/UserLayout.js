import { Typography } from "@mui/material";
import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import UserButton from "../../components/user/UserButton";
import UserList from "./userLayout/UserList";

export default function UserLayout() {
  return (
    <div style={{ textAlign: "left" }}>
      <Grid2 container justifyContent="space-between" pr={8}>
        <Grid2 item>
          <Typography>User</Typography>
        </Grid2>
        <Grid2 item>
          <UserButton info={"Add new Employee"} />
        </Grid2>
      </Grid2>
      <UserList />
    </div>
  );
}
