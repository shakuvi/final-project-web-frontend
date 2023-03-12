import { TextField, Typography } from "@mui/material";
import React from "react";

export default function InputBoxWithTopLabel({ info }) {
  return (
    <div style={{ textAlign: "left" }}>
      <Typography>{info}</Typography>
      <TextField variant="outlined" fullWidth />
    </div>
  );
}
