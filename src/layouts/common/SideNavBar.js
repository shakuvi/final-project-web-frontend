import React from "react";
import LogoImage from "../../components/common/LogoImage";
import Menu from "./SideNavBar/Menu";
import Logout from "../../components/common/SideNavBar/Logout";
import { Typography } from "@mui/material";

export default function SideNavBar() {
  return (
    <div>
      <LogoImage />
      <div style={{ textAlign: "left" }}>
        <Typography> MENU</Typography>
        <Menu />
      </div>
      <div style={{ position: "fixed", bottom: "70px", left: "20px" }}>
        <Logout />
      </div>
    </div>
  );
}
