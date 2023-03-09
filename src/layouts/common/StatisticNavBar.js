import React from "react";
import Item from "./StatisticNavBar/Item";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function StatisticNavBar() {
  return (
    <div>
      <Grid2 container justifyContent="space-around">
        <Item />
        <Item />
        <Item />
      </Grid2>
    </div>
  );
}
