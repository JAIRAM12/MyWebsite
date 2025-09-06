import { configureStore } from "@reduxjs/toolkit";
import token from "./reducer";

const store = configureStore({
    reducer: {
        token, // ✅ must be a reducer function
    },
});

export default store;
