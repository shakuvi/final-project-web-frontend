import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React from "react";
import DrawerItem from "./OrderDrawer/DrawerItem";
import DrawerProgress from "./OrderDrawer/DrawerProgress";
import DrawerReview from "./OrderDrawer/DrawerReview";

export default function OrderTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Items" value="1" />
              <Tab label="Progress" value="2" />
              <Tab label="Review" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <DrawerItem />
          </TabPanel>
          <TabPanel value="2">
            <DrawerProgress />
          </TabPanel>
          <TabPanel value="3">
            <DrawerReview />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
