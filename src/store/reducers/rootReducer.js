import { combineReducers } from "redux";
import foodReducer from "./foodReducer";
import employeeReducer from "./employeeReducer";

const rootReducer = combineReducers({ foodReducer, employeeReducer });

export default rootReducer;
