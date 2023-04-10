import { TextField, Typography } from "@mui/material";
import React from "react";

export default function DetiledInputBoxWithLabel({ info }) {
  return (
    <div style={{ textAlign: "left" }}>
      <Typography>Details</Typography>
      <TextField
        id="outlined-multiline-static"
        multiline
        rows={4}
        fullWidth
        value={info}
        sx={{
          border: "2px solid #000000",
          borderRadius: 1,
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "transparent",
            },
        }}
      />
    </div>
  );
}
