import { TextField, Typography } from "@mui/material";
import React from "react";

export default function InputBoxWithTopLabel({ info }) {
  return (
    <div style={{ textAlign: "left" }}>
      <Typography>{info.label}</Typography>
      <TextField variant="outlined" fullWidth placeholder={info.place} />
    </div>
  );
}
