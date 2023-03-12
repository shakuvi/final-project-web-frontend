import { Button } from "@mui/material";
import React from "react";

export default function MenuButton({ info }) {
  return (
    <div>
      <Button
        sx={{
          textTransform: "none",
          justifyContent: "flex-start",
          width: 215,
          color: "#666666",
          ":hover": {
            backgroundColor: "#F8E6CC",
          },
        }}
      >
        {info}
      </Button>
    </div>
  );
}
