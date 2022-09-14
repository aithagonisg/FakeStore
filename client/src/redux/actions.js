import {
  USER_INFO,
  CART_DATA,
  ORDERS_DATA,
  PRODUCTS,
  SNACKBAR_INFO,
  ADDRESS_DATA,
} from "./ActionTypes";
export const userInfo = (data) => ({
  type: USER_INFO,
  payload: data,
});

export const setCartData = (data) => ({
  type: CART_DATA,
  payload: data,
});

export const setOrdersData = (data) => ({
  type: ORDERS_DATA,
  payload: data,
});

export const setAddressData = (data) => ({
  type: ADDRESS_DATA,
  payload: data,
});

export const setProductsData = (data) => ({
  type: PRODUCTS,
  payload: data,
});

export const setSnackBarInfo = (data) => ({
  type: SNACKBAR_INFO,
  payload: data,
});
