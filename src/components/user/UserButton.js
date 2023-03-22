import { Button } from "@mui/material";
import React from "react";

export default function UserButton({ info }) {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FD5C25",
          textTransform: "none",
          width: 150,
        }}
      >
        {info}
      </Button>
    </div>
  );
}
