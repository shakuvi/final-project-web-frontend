import * as Actions from "../actions/foodAction";

const inisialState = {
  foodListLoading: "notStarted",
  foodList: [],
  userSelectedFood: {},
};

const foodReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_FOODS_LOADING:
      return { ...state, foodListLoading: "loading" };

    case Actions.GET_ALL_FOODS_SUCCESS:
      return { ...state, foodListLoading: "sucess", foodList: action.payload };

    case Actions.GET_ALL_FOODS_FAIL:
      return { ...state, foodListLoading: "fail", foodList: [] };

    case Actions.SET_USER_SELECTED_FOOD:
      return { ...state, userSelectedFood: action.payload };
    default:
      return state;
  }
};

export default foodReducer;
