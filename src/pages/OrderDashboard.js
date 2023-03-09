import React from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import FoodOrders from "../layouts/Order/FoodOrders";

export default function OrderDashboard() {
  return (
    <div>
      <CommonLayout>
        <FoodOrders />
      </CommonLayout>
    </div>
  );
}
