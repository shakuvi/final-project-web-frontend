import React, { useEffect } from "react";
import FoodLayout from "../layouts/Food/FoodLayout";
import CommonLayout from "../layouts/common/CommonLayout";
import { useDispatch } from "react-redux";
import {
  getAllFoodAccodingToCategory,
  getAllFoods,
} from "../store/actions/foodAction";

export default function FoodManageDashbaord() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllFoods());
    dispatch(getAllFoodAccodingToCategory(categoryId)); // pass the category ID as a parameter
  }, [dispatch]);

  const categoryId = "64344860b4a92de07f4dfffc"; // set the category ID
  return (
    <div>
      <CommonLayout>
        <FoodLayout />
      </CommonLayout>
    </div>
  );
}
