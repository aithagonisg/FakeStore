import { USER_INFO, CART_DATA, ORDERS_DATA, PRODUCTS } from "./ActionTypes";
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

export const setProductsData = (data) => ({
  type: PRODUCTS,
  payload: data,
});
