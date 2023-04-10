import React from "react";
import { Drawer, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import UserButton from "../../components/user/UserButton";
import FoodList from "./foodLayout/FoodList";
import { useDispatch, useSelector } from "react-redux";
import { setUserSelectedFood } from "../../store/actions/foodAction";
import FoodDrawer from "./foodLayout/FoodDrawer";

export default function FoodLayout() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
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
          <UserButton info={"Add new Food"} handleonclick={toggleDrawer} />
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer}
            PaperProps={{
              sx: {
                backgroundColor: "#F7EEE2",
              },
            }}
            sx={{
              "& .MuiBackdrop-root": {
                backgroundColor: "transparent",
              },
            }}
          >
            <FoodDrawer />
            <div style={{ width: 450 }}></div>
          </Drawer>
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
