import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import LogoImage from "../../components/common/LogoImage";
import Menu from "./SideNavBar/Menu";
import Logout from "../../components/common/SideNavBar/Logout";

export default function SideNavBar() {
  return (
    <div>
      <Grid2 container justifyContent="center" direction="column">
        <Grid2 Item>
          <LogoImage />
        </Grid2>
        <Grid2 container direction="column" alignItems="flex-start">
          <Grid2 Item pl={2}>
            MENU
          </Grid2>
          <Grid2 Item>
            <Menu />
          </Grid2>
        </Grid2>
        <Grid2 Item>
          <Logout />
        </Grid2>
      </Grid2>
    </div>
  );
}
