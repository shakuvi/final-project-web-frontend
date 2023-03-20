import { Button } from "@mui/material";
import React from "react";

export default function StatusButton({ info }) {
  console.log(info);
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          width: 90,
          color: "black",
        }}
        style={info.style}
      >
        {info.name}
      </Button>
    </div>
  );
}
