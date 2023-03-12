import React from "react";
import Item from "./StatisticNavBar/Item";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const snavitems = [
  {
    image: <ShoppingCartOutlinedIcon sx={{ fontSize: "60px" }} />,
    description: "Food Delovered",
    value: "445",
  },
  {
    image: <StarBorderOutlinedIcon sx={{ fontSize: "60px" }} />,
    description: "Satisfaction Rating",
    value: "98.7%",
  },
  {
    image: (
      <AccountBalanceWalletOutlinedIcon
        sx={{ fontSize: "60px" }}
        fontSize="large"
      />
    ),
    description: "Balance",
    value: "LKR 27599.87",
  },
];

export default function StatisticNavBar() {
  return (
    <div>
      <Grid2
        container
        justifyContent="space-around"
        alignItems="center"
        sx={{ height: "75px" }}
      >
        {snavitems.map((val, key) => {
          return (
            <Grid2 Item key={key}>
              <Item info={val} />
            </Grid2>
          );
        })}
      </Grid2>
    </div>
  );
}
