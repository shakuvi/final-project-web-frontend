import { Typography } from "@mui/material";
import React from "react";
import DrawerInputBoxWithLabel from "../../components/user/DrawerInputBoxWithLabel";
import DrawerDropDownWithLabel from "../../components/user/DrawerDropDownWithLabel";

export default function UserDrawer() {
  return (
    <div>
      <div style={{ paddingLeft: 20 }}>
        <Typography>User Details</Typography>
      </div>
      <div style={{ marginLeft: "auto", marginRight: "auto", width: "90%" }}>
        <div style={{ paddingTop: 10, paddingBottom: 10 }}>
          <DrawerInputBoxWithLabel info={{ label: "Name" }} />
        </div>
        <div style={{ paddingTop: 10, paddingBottom: 10 }}>
          <DrawerInputBoxWithLabel info={{ label: "Mobile Number" }} />
        </div>
        <div style={{ paddingTop: 10, paddingBottom: 10 }}>
          <DrawerDropDownWithLabel />
        </div>
        <div style={{ paddingTop: 10, paddingBottom: 10 }}>
          <DrawerInputBoxWithLabel info={{ label: "Address" }} />
        </div>
      </div>
    </div>
  );
}
