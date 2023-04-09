import React, { useEffect } from "react";
import FoodLayout from "../layouts/Food/FoodLayout";
import CommonLayout from "../layouts/common/CommonLayout";
import { useDispatch } from "react-redux";
import { getAllFoods } from "../store/actions/foodAction";

export default function FoodManageDashbaord() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllFoods());
  }, [dispatch]);
  return (
    <div>
      <CommonLayout>
        <FoodLayout />
      </CommonLayout>
    </div>
  );
}
