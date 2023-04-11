import * as Actions from "../actions/foodAction";

const inisialState = {
  foodListLoading: "notStarted",
  foodList: [],
  userSelectedFood: {},
  getFoodsAccodingToCetegory: [],
  getFoodsAccodingToCetegoryLoading: "notStarted",
};

const foodReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_FOODS_LOADING:
      return { ...state, foodListLoading: "loading" };

    case Actions.GET_ALL_FOODS_SUCCESS:
      return { ...state, foodListLoading: "sucess", foodList: action.payload };

    case Actions.GET_ALL_FOODS_FAIL:
      return { ...state, foodListLoading: "fail", foodList: [] };

    case Actions.GET_ALL_FOOD_ACCODING_TO_CATEGORY_LOADING:
      return { ...state, getFoodsAccodingToCetegoryLoading: "loading" };

    case Actions.GET_ALL_FOOD_ACCODING_TO_CATEGORY_SUCCESS:
      return {
        ...state,
        getFoodsAccodingToCetegoryLoading: "sucess",
        getFoodsAccodingToCetegory: action.payload,
      };

    case Actions.GET_ALL_FOOD_ACCODING_TO_CATEGORY_FAIL:
      return {
        ...state,
        getFoodsAccodingToCetegoryLoading: "fail",
        getFoodsAccodingToCetegory: [],
      };

    case Actions.SET_USER_SELECTED_FOOD:
      return { ...state, userSelectedFood: action.payload };

    default:
      return state;
  }
};

export default foodReducer;
