const initialState = {
  token: null,
  isLogin: false,
  expiryDate: null,
  userInfo: null,
};

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        token: action.payload.token,
        isLogin: true,
        expiryDate: action.payload.expiryDate,
      };
    case "SET_USER_INFO":
  return {
    ...state,
    userInfo: {
      ...action.payload.user,
    },
  };
    case 'CLEAR_TOKEN':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default tokenReducer;