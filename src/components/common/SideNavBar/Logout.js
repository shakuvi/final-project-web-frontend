import React from "react";
import Button from "@mui/material/Button";

export default function Logout() {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FD5C25",
          textTransform: "none",
          width: 200,
        }}
      >
        Log Out
      </Button>
    </div>
  );
}
