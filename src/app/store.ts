import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../components/Auth/accountSlices"

const rootReducer = {
    account: accountReducer,
}

const store = configureStore({
    reducer: rootReducer
})

export default store;