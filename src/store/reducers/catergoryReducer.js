import * as Actions from "../actions/categoryAction";

const inisialState = {
  getAllCatergoryListLoading: "notStarted",
  getAllCatergoryList: [],
};

const catergoryReducer = (state = inisialState, action) => {
  switch (action.type) {
    case Actions.GET_ALL_CATERGORIES_LOADING:
      return { ...state, getAllCatergoryListLoading: "loading" };

    case Actions.GET_ALL_CATERGORIES_SUCCESS:
      return {
        ...state,
        getAllCatergoryListLoading: "sucess",
        getAllCatergoryList: action.payload,
      };

    case Actions.GET_ALL_CATERGORIES_FAIL:
      return {
        ...state,
        getAllCatergoryListLoading: "fail",
        getAllCatergoryList: [],
      };

    default:
      return state;
  }
};

export default catergoryReducer;
