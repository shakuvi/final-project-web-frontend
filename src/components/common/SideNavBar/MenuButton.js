import React from "react";
import { Button } from "@mui/material";

export default function MenuButton({ info }) {
  return (
    <Button
      sx={{
        textTransform: "none",
        justifyContent: "flex-start",
        width: 215,
        color: "#666666",
        ":hover": {
          backgroundColor: "#F8E6CC",
        },
        paddingLeft: "30px",
      }}
    >
      {info}
    </Button>
  );
}
