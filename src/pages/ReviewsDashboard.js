import React from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import ReviewLayout from "../layouts/Review/ReviewLayout";

export default function ReviewsDashboard() {
  return (
    <div>
      <CommonLayout>
        <ReviewLayout />
      </CommonLayout>
    </div>
  );
}
