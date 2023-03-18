import React from "react";
import logoImg from "../../assets/Images/logo.png";
import Menu from "./SideNavBar/Menu";
import { Typography } from "@mui/material";

export default function SideNavBar() {
  return (
    <div>
      <img src={logoImg} alt="logo" width="55%" />
      <div style={{ textAlign: "left" }}>
        <Typography style={{ paddingLeft: "20px" }}> MENU</Typography>
        <Menu />
      </div>
    </div>
  );
}
