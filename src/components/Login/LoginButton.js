import React from "react";
import Button from "@mui/material/Button";

export default function LoginButton() {
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          width: 200,
        }}
        style={{ background: "linear-gradient(to right, #FE6329, #FDBB29)" }}
      >
        Login
      </Button>
    </div>
  );
}
