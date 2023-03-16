import React from "react";
import FoodItem from "./Item/FoodItem";
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function DrawerItem() {
  return (
    <div>
      <Grid2 container justifyContent="space-between" alignItems="center">
        <FoodItem />
        <Typography>1 Item</Typography>
      </Grid2>
    </div>
  );
}
