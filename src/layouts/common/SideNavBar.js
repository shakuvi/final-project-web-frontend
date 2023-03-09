import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import LogoImage from "../../components/common/LogoImage";
import Menu from "./SideNavBar/Menu";
import Logout from "../../components/common/SideNavBar/Logout";

export default function SideNavBar() {
  return (
    <div>
      <Grid2 container justifyContent="center" direction="column">
        <LogoImage />
        <Grid2 container pl={3}>
          <span>Menu</span>
        </Grid2>
        <Menu />
        <Logout />
      </Grid2>
    </div>
  );
}
