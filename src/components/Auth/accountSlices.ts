import { createSlice } from "@reduxjs/toolkit";
const account = createSlice({
    name: "user",
    initialState: {
        user:null,
    },
    reducers: {
        registerAccount: (state: any, action) => {
            state.push(action.payload);
        },
        loginAccount: (state: any, action) => {
            state.user = action.payload;
        },
        logoutAccount: (state: any) => {
            state.user = null;
        }
    }
});

const { reducer, actions } = account;
export const { registerAccount, loginAccount, logoutAccount} = actions;
export default reducer;