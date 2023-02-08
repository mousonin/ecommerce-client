import userReducer from "./user";
import { combineReducers } from "redux";
import { useReducer } from "react";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
