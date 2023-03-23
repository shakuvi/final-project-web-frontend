import React from "react";
import { Typography } from "@mui/material";
import Food from "./Food";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import UserButton from "../../components/user/UserButton";

export default function FoodLayout() {
  return (
    <div style={{ textAlign: "left" }}>
      <Grid2 container justifyContent="space-between" pr={8}>
        <Grid2 item>
          <Typography>Food</Typography>
        </Grid2>
        <Grid2 item>
          <UserButton info={"Add new Food"} />
        </Grid2>
      </Grid2>
      <Food />
    </div>
  );
}
