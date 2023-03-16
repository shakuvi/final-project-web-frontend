import React from "react";
import FoodImage from "../../../../components/order/FoodImage";
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function FoodItem() {
  return (
    <div>
      <Grid2 container spacing={3} alignItems="center">
        <Grid2 item>
          <FoodImage />
        </Grid2>
        <Grid2 item>
          <Typography>Food Name</Typography>
        </Grid2>
      </Grid2>
    </div>
  );
}
