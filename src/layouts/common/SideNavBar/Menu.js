import React from "react";
import MenuButton from "../../../components/common/SideNavBar/MenuButton";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function Menu() {
  const items = ["Orders", "Users", "Reviews", "Foods", "Payment"];
  return (
    <div>
      <Grid2 container direction="column">
        {items.map((val, key) => {
          return (
            <Grid2 Item key={key}>
              <MenuButton info={val} />
            </Grid2>
          );
        })}
      </Grid2>
    </div>
  );
}
