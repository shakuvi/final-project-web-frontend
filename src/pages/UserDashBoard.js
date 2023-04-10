import React, { useEffect } from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import UserLayout from "../layouts/Users/UserLayout";
import { useDispatch } from "react-redux";
import { getAllEmployees } from "../store/actions/employeeAction";

export default function UserDashBoard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEmployees());
  }, [dispatch]);
  return (
    <div>
      <CommonLayout>
        <UserLayout />
      </CommonLayout>
    </div>
  );
}
