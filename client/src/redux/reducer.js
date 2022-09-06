import { USER_INFO } from "./ActionTypes";

const initialState = {
  userInfo: {},
};
export const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };

    default:
      return state;
  }
};
