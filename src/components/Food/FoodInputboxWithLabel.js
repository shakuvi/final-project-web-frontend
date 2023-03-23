import { TextField, Typography } from "@mui/material";
import React from "react";

export default function FoodInputboxWithLabel({ info }) {
  return (
    <div>
      <div style={{ textAlign: "left" }}>
        <Typography>{info.label}</Typography>
        <TextField
          fullWidth
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
    </div>
  );
}
