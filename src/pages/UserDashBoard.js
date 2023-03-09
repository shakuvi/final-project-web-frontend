import React from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import UserLayout from "../layouts/Users/UserLayout";

export default function UserDashBoard() {
  return (
    <div>
      <CommonLayout>
        <UserLayout />
      </CommonLayout>
    </div>
  );
}
