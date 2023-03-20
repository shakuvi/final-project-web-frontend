import { Button } from "@mui/material";
import React from "react";

export default function StatusButton({ info }) {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          width: 80,
        }}
      >
        {info.name}
      </Button>
    </div>
  );
}
