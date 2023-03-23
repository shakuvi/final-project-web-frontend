import { Avatar, Typography } from "@mui/material";
import React from "react";
import FoodInputboxWithLabel from "../../components/Food/FoodInputboxWithLabel";

export default function FoodDrawer() {
  return (
    <div>
      <Typography>Food Details</Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 15,
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 180, height: 180 }}
        />
      </div>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "90%",
          textAlign: "center",
        }}
      >
        <FoodInputboxWithLabel info={{ label: "Name" }} />
        <FoodInputboxWithLabel info={{ label: "Price" }} />
      </div>
    </div>
  );
}
