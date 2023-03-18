import { Avatar } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import OrderNumber from "../../../components/order/OrderNumber";
import ThreeStatusButtons from "./Progress/ThreeStatusButtons";

export default function DrawerProgress() {
  return (
    <div>
      <Grid2 container alignItems="center" spacing={3}>
        <Grid2 item>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56 }}
          />
        </Grid2>
        <Grid2 item>
          <OrderNumber />
          <ThreeStatusButtons />
        </Grid2>
      </Grid2>
    </div>
  );
}
