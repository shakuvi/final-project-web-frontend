import { Avatar, Typography } from "@mui/material";
import React from "react";
import FoodInputboxWithLabel from "../../../components/Food/FoodInputboxWithLabel";
import DetiledInputBoxWithLabel from "../../../components/Food/DetiledInputBoxWithLabel";
import UserButton from "../../../components/user/UserButton";
import { useSelector } from "react-redux";

export default function FoodDrawer() {
  const { userSelectedFood } = useSelector((store) => store.foodReducer);
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
        <FoodInputboxWithLabel
          info={{ label: "Name" }}
          value={userSelectedFood.name}
        />
        <DetiledInputBoxWithLabel info={userSelectedFood.description} />
        <FoodInputboxWithLabel
          info={{ label: "Price" }}
          value={userSelectedFood.price}
        />
      </div>
      <div style={{ textAlign: "center", paddingTop: 120 }}>
        <UserButton info={"Update"} />
      </div>
    </div>
  );
}
