import React from "react";
import Button from "../../components/Login/Button";
import { Typography } from "@mui/material";
import InputBoxWithTopLabel from "../../components/Login/InputBoxWithTopLabel";

export default function LoginLayout() {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "30%",
      }}
    >
      <Typography>Login</Typography>
      <InputBoxWithTopLabel info={"User Name"} />
      <InputBoxWithTopLabel info={"Password"} />
      <Button />
    </div>
  );
}
