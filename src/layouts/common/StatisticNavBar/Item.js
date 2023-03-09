import React from "react";
import Discription from "../../../components/common/StatisticNavBar/Discription";
import Value from "../../../components/common/StatisticNavBar/Value";
import Image from "../../../components/common/StatisticNavBar/Image";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function Item() {
  return (
    <div>
      <Grid2 container>
        <Image />
        <Grid2 Item>
          <Discription />
          <Value />
        </Grid2>
      </Grid2>
    </div>
  );
}
