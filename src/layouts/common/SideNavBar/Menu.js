import React from "react";
import MenuButton from "../../../components/common/SideNavBar/MenuButton";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "react-router-dom";

const items = [
  { title: "Orders", route: "orders" },
  { title: "Users", route: "users" },
  { title: "Reviews", route: "reviews" },
  { title: "Foods", route: "foods" },
];

export default function Menu() {
  return (
    <div>
      <Grid2 container direction="column">
        {items.map((val, key) => {
          return (
            <Grid2 Item key={key}>
              <Link style={{ textDecoration: "none" }} to={`/${val.route}`}>
                <MenuButton info={val.title} />
              </Link>
            </Grid2>
          );
        })}
      </Grid2>
    </div>
  );
}
