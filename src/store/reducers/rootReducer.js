import { combineReducers } from "redux";
import foodReducer from "./foodReducer";
import employeeReducer from "./employeeReducer";
import catergoryReducer from "./catergoryReducer";

const rootReducer = combineReducers({
  foodReducer,
  employeeReducer,
  catergoryReducer,
});

export default rootReducer;
