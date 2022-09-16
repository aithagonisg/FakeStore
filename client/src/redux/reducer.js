import {
  USER_INFO,
  CART_DATA,
  ORDERS_DATA,
  PRODUCTS,
  SNACKBAR_INFO,
  ADDRESS_DATA,
  PROGRESSBAR,
  CARDDETAILS,
  ORDERINFO,
} from "./ActionTypes";

const initialState = {
  userInfo: {},
  products: [],
  cart: [],
  orders: [],
  address: [],
  snackInfo: {
    isEnable: false,
    severity: "info",
    message: "Pass Some Message",
    duration: 3000,
  },
  orderInfo: {},
  cardDetails: [],
  progress: false,
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
    case ADDRESS_DATA:
      return {
        ...state,
        address: action.payload,
      };
    case CARDDETAILS:
      return {
        ...state,
        cardDetails: action.payload,
      };
    case ORDERINFO:
      return {
        ...state,
        orderInfo: action.payload,
      };
    case SNACKBAR_INFO:
      return {
        ...state,
        snackInfo: { ...state.snackInfo, ...action.payload },
      };
    case PROGRESSBAR:
      return {
        ...state,
        progress: action.payload,
      };

    default:
      return state;
  }
};
