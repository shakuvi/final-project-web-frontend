import React from "react";
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import UserButton from "../../components/user/UserButton";
import FoodList from "./foodLayout/FoodList";
import { useDispatch, useSelector } from "react-redux";
import { setUserSelectedFood } from "../../store/actions/foodAction";

export default function FoodLayout() {
  const { foodListLoading, foodList } = useSelector(
    (store) => store.foodReducer
  );

  const dispatch = useDispatch();

  const handleFoodSelect = (food) => {
    dispatch(setUserSelectedFood(food));
  };
  return (
    <div style={{ textAlign: "left" }}>
      <Grid2 container justifyContent="space-between" pr={8}>
        <Grid2 item>
          <Typography>Food</Typography>
        </Grid2>
        <Grid2 item>
          <UserButton info={"Add new Food"} />
        </Grid2>
      </Grid2>
      {foodListLoading === "loading" ? (
        <div>Loading...</div>
      ) : foodListLoading === "sucess" ? (
        <FoodList allFoods={foodList} handleFoodSelect={handleFoodSelect} />
      ) : foodListLoading === "fail" ? (
        <div>error</div>
      ) : (
        ""
      )}
    </div>
  );
}
