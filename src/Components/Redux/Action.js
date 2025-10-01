export const clearToken = () => ({
    type: "CLEAR_TOKEN",
});

// takes token + expiry from backend
export const addToken = (token, expiryDate) => ({
    type: "SET_TOKEN",
    payload: { expiryDate, token },
});

// takes user object {id, role, avatar...}
export const setUserInfo = (user, expiryDate) => ({
    type: "SET_USER_INFO",
    payload: {
        user
    },
});
