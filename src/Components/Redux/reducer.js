const initialState = {
  token: null,
  isLogin: false,
  expiryDate: null,
  userInfo: {},
};

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        token: action.payload.token,
        isLogin: true,
      };
    case "SET_USER_INFO":
  return {
    ...state,
    expiryDate: action.payload.expiryDate,
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