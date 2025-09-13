export const clearToken = () => ({
    type: "CLEAR_TOKEN",
});

// takes token + expiry from backend
export const addToken = (token, expiresAt) => ({
    type: "SET_TOKEN",
    payload: { token },
});

// takes user object {id, role, avatar...}
export const setUserInfo = (user, expiryDate) => ({
    type: "SET_USER_INFO",
    payload: {
        user,
        expiryDate,
    },
});
