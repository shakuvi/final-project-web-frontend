import axios from "axios";

export const GET_ALL_EMPLOYEES_LOADING_LOADING =
  "GET_ALL_EMPLOYEES_LOADING_LOADING";
export const GET_ALL_EMPLOYEES_LOADING_SUCCESS =
  "GET_ALL_EMPLOYEES_LOADING_SUCCESS";
export const GET_ALL_EMPLOYEES_LOADING_FAIL = "GET_ALL_EMPLOYEES_LOADING_FAIL";

export const getAllEmployees = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_EMPLOYEES_LOADING_LOADING });
    axios
      .get("http://localhost:5000/employee/get-all")
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: GET_ALL_EMPLOYEES_LOADING_SUCCESS,
          payload: response.data.employees,
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: GET_ALL_EMPLOYEES_LOADING_FAIL });
      });
  };
};
