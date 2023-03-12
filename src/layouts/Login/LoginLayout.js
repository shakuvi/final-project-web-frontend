import React from "react";
import { Typography } from "@mui/material";
import InputBoxWithTopLabel from "../../components/Login/InputBoxWithTopLabel";
import LoginButton from "../../components/Login/LoginButton";

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

      <div style={{ paddingTop: "2%" }}>
        <InputBoxWithTopLabel
          info={{ label: "User Name/Email", place: "Enter your user name" }}
        />
      </div>
      <div style={{ paddingTop: "2%" }}>
        <InputBoxWithTopLabel
          info={{ label: "Password", place: "Enter your password" }}
        />
      </div>
      <div style={{ paddingTop: "10%" }}>
        <LoginButton />
      </div>
    </div>
  );
}
