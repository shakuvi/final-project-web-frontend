import axios from "axios";

export const GET_ALL_CATERGORIES_LOADING = "GET_ALL_CATERGORIES_LOADING";
export const GET_ALL_CATERGORIES_SUCCESS = "GET_ALL_CATERGORIES_SUCCESS";
export const GET_ALL_CATERGORIES_FAIL = "GET_ALL_CATERGORIES_FAIL";

export const getAllCatergories = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_CATERGORIES_LOADING });
    axios
      .get("http://localhost:5000/foodcatergory/get-all")
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_ALL_CATERGORIES_SUCCESS,
          payload: response.data.foodCatergories,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: GET_ALL_CATERGORIES_FAIL });
      });
  };
};
