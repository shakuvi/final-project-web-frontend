import * as Actions from "../actions/employeeAction";

const inisialState = {
  employeeIsLoading: "notStarted",
  employeeList: [],
};

const employeeReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_EMPLOYEES_LOADING_LOADING:
      return { ...state, employeeIsLoading: "loading" };

    case Actions.GET_ALL_EMPLOYEES_LOADING_SUCCESS:
      return {
        ...state,
        employeeIsLoading: "sucess",
        employeeList: action.payload,
      };

    case Actions.GET_ALL_EMPLOYEES_LOADING_FAIL:
      return { ...state, employeeIsLoading: "fail", employeeList: [] };

    default:
      return state;
  }
};

export default employeeReducer;
