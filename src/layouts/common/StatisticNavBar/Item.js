import React from "react";
import Discription from "../../../components/common/StatisticNavBar/Discription";
import Value from "../../../components/common/StatisticNavBar/Value";
import Image from "../../../components/common/StatisticNavBar/Image";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function Item({ info }) {
  return (
    <div>
      <Grid2 container alignItems="center">
        <Image val={info.image} />
        <Grid2 container alignItems="flex-start" direction="column" pl={1}>
          <Discription val={info.description} />
          <Value val={info.value} />
        </Grid2>
      </Grid2>
    </div>
  );
}
