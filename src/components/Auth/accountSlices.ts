import { createSlice } from "@reduxjs/toolkit";
const account = createSlice({
    name: "account",
    initialState: [],
    reducers: {
        registerAccount: (state: any, action) => {
            state.push(action.payload);
        }
    }
});

const { reducer, actions } =account;
export const { registerAccount} = actions;
export default reducer;