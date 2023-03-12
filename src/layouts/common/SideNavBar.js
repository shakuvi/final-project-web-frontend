import React from "react";
import logoImg from "../../assets/Images/logo.png";
import Menu from "./SideNavBar/Menu";
import Logout from "../../components/common/SideNavBar/Logout";
import { Typography } from "@mui/material";

export default function SideNavBar() {
  return (
    <div>
      <img src={logoImg} alt="logo" width="55%" />
      <div style={{ textAlign: "left" }}>
        <Typography style={{ paddingLeft: "20px" }}> MENU</Typography>
        <Menu />
      </div>
      <div style={{ position: "fixed", bottom: "70px", left: "20px" }}>
        <Logout />
      </div>
    </div>
  );
}
