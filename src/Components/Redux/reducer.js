import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    userRole: null,
    isLogin: false,
    token: null,
    image: null
};

const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        addToken: (state, action) => {
            console.log(action.payload)
            state.userId = action.payload.user.id;
            state.userRole = action.payload.user.role;
            state.token = action.payload.token;
            state.isLogin = true;
            state.image = action.payload.user.avatar ? action.payload.user.avatar : null;
        },
        clearToken: (state) => {
            state.userId = null;
            state.userRole = null;
            state.isLogin = false;
            state.image = null;
            state.token = null;
        },
    },
});

export const { addToken, clearToken } = tokenSlice.actions;
export default tokenSlice.reducer;
