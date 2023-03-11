import React from "react";
import CircleNotificationsOutlinedIcon from "@mui/icons-material/CircleNotificationsOutlined";
import { IconButton } from "@mui/material";

export default function NotificationIcon() {
  return (
    <div>
      <IconButton sx={{ color: "#000000" }}>
        <CircleNotificationsOutlinedIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
