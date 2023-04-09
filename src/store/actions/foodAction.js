import axios from "axios";

export const GET_ALL_FOODS_LOADING = "GET_ALL_FOODS_LOADING";
export const GET_ALL_FOODS_SUCCESS = "GET_ALL_FOODS_SUCCESS";
export const GET_ALL_FOODS_FAIL = "GET_ALL_FOODS_FAIL";

export const SET_USER_SELECTED_FOOD = "SET_USER_SELECTED_FOOD";

export const getAllFoods = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_FOODS_LOADING });
    axios
      .get("http://localhost:5000/food/get-all")
      .then((response) => {
        console.log(response.data);
        dispatch({ type: GET_ALL_FOODS_SUCCESS, payload: response.data.foods });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: GET_ALL_FOODS_FAIL });
      });
  };
};

export const setUserSelectedFood = (food) => {
  return (dispatch) => {
    dispatch({ type: SET_USER_SELECTED_FOOD, payload: food });
  };
};
