import { Avatar, Rating, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

export default function DrawerReview() {
  const [value, setValue] = React.useState(2);

  return (
    <div>
      <Grid2 container alignItems="center" justifyContent="space-around">
        <Grid2 item>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56 }}
          />
        </Grid2>
        <Grid2 item>
          <div style={{ paddingBottom: 12 }}>
            <Typography>Order number</Typography>
          </div>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Grid2>
      </Grid2>
    </div>
  );
}
