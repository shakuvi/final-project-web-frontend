import React from "react";
import FoodLayout from "../layouts/Food/FoodLayout";
import CommonLayout from "../layouts/common/CommonLayout";

export default function FoodManageDashbaord() {
  return (
    <div>
      <CommonLayout>
        <FoodLayout />
      </CommonLayout>
    </div>
  );
}
