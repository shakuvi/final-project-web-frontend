import React from "react";
import Button from "@mui/material/Button";

export default function LoginButton() {
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
        Login
      </Button>
    </div>
  );
}
