import { USER_INFO, CART_DATA, ORDERS_DATA, PRODUCTS } from "./ActionTypes";

const initialState = {
  userInfo: {},
  products: [],
  cart: [],
  orders: [],
};
export const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case CART_DATA:
      return {
        ...state,
        cart: action.payload,
      };
    case ORDERS_DATA:
      return {
        ...state,
        orders: action.payload,
      };

    default:
      return state;
  }
};
