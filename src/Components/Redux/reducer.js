import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    userRole: null,
    isLogin: false,
    token: null,
    image: null,
    userName: null
};

const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.userId = action.payload.id;
            state.userRole = action.payload.role;
            state.userName = action.payload.name
            state.isLogin = true;
            state.image = action.payload.image ? action.payload.image : null;
            state.token = action.payload.token;
        },
        clearToken: (state) => {
            state.userId = null;
            state.userRole = null;
            state.isLogin = false;
            state.userName = null;
            state.token = null;
        },
    },
});

export const { addToken, clearToken } = tokenSlice.actions;
export default tokenSlice.reducer;
