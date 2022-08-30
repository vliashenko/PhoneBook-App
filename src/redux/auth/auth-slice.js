import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: null,
    status: null
};



const authSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        resetStatus (state, _) {
            state.status = null
        }
    },
    extraReducers: {
        [authOperations.register.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.status = "fulfilled";
        },
        [authOperations.register.pending]: (state, action) => {
            state.status = "pending"
        },
        [authOperations.register.rejected]: (state, action) => {
            state.status = "rejected"
        },
        [authOperations.login.fulfilled]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.status = "fulfilled";
        },
        [authOperations.login.pending]: (state, action) => {
            state.status = "pending"
        },
        [authOperations.login.rejected]: (state, action) => {
            state.status = "rejected"
        },
        [authOperations.logOut.fulfilled] (state, _) {
            state.user = initialState.user;
            state.token = initialState.token;
            state.isLoggedIn = false;
            state.status = null
        },
        [authOperations.fetchCurrentUser.fulfilled] (state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
    }
});

export const { resetStatus } = authSlice.actions;

export default authSlice.reducer;