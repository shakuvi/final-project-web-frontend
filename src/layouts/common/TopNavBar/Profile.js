import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import ProfilePicture from "../../../components/common/TopNavBar/ProfilePicture";
import ProfileName from "../../../components/common/TopNavBar/ProfileName";

export default function Profile() {
  return (
    <div>
      <Grid2 container spacing={1} alignItems="center">
        <Grid2 Item>
          <ProfilePicture />
        </Grid2>
        <Grid2 Item>
          <ProfileName />
        </Grid2>
      </Grid2>
    </div>
  );
}
