import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import userReducer from "./reducer/user";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
