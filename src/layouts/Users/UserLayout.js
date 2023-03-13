import { Typography } from "@mui/material";
import React from "react";
import UserTable from "./UserTable";

export default function UserLayout() {
  return (
    <div style={{ textAlign: "left", paddingRight: "20px" }}>
      <Typography>User</Typography>
      <UserTable />
    </div>
  );
}
