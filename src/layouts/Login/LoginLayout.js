import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import Email from "../../components/Login/Email";
import Button from "../../components/Login/Button";

export default function LoginLayout() {
  return (
    <div>
      <Grid2 container>
        <Grid2 xs={12}>
          <span>Login</span>
        </Grid2>
        <Grid2 xs={12}>
          <Email />
        </Grid2>
        <Grid2 xs={12}>
          <Email />
        </Grid2>
        <Grid2 xs={12}>
          <Button />
        </Grid2>
      </Grid2>
    </div>
  );
}
