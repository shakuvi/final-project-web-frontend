import React from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import PaymentLayout from "../layouts/Payment/PaymentLayout";

export default function PaymentDashboard() {
  return (
    <div>
      <CommonLayout>
        <PaymentLayout />
      </CommonLayout>
    </div>
  );
}
