import {
  AuthLoginRegister,
  getProductsList,
  getCartAndOrdersList,
  removeFromCartList,
  addToCartList,
  addAddress,
  addCardDetails,
  placeOrder,
} from "../services/Authsevice";
import {
  USER_INFO,
  CART_DATA,
  ORDERS_DATA,
  PRODUCTS,
  SNACKBAR_INFO,
  ADDRESS_DATA,
  PROGRESSBAR,
  CARDDETAILS,
  ORDERS,
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

export const setCardDetails = (data) => ({
  type: CARDDETAILS,
  payload: data,
});

export const setSnackBarInfo = (data) => ({
  type: SNACKBAR_INFO,
  payload: data,
});

export const progressBar = (data) => ({
  type: PROGRESSBAR,
  payload: data,
});

// asynchronous calls with middleware
export const UserLoginRegister = (url, data) => {
  return (dispatch) => {
    dispatch(progressBar(true));
    setTimeout(() => {
      AuthLoginRegister(url, data)
        .then((response) => response.json())
        .then((result) => {
          if (result.token) {
            localStorage.setItem("token", result.token);
            localStorage.setItem("userInfo", JSON.stringify(result));
            dispatch(userInfo(result));
            dispatch(progressBar(false));
          } else {
            dispatch(
              setSnackBarInfo({
                isEnable: true,
                severity: "error",
                message: result,
              })
            );
          }
        });
    }, 1000);
  };
};

export const LoadCartList = (snakInfoMessage) => {
  return (dispatch) => {
    setTimeout(() => {
      getCartAndOrdersList()
        .then((res) => res.json())
        .then((data) => {
          dispatch(setCartData(data.cart.cart));
          dispatch(setOrdersData(data.cart.orders));
          dispatch(setAddressData(data.cart.address));
          dispatch(setCardDetails(data.cart.cardDeatils));
          dispatch(progressBar(false));
          if (snakInfoMessage) {
            dispatch(
              setSnackBarInfo({
                isEnable: true,
                severity: "success",
                message: snakInfoMessage,
              })
            );
          }
        });
    }, 500);
  };
};

export const LoadProducts = () => {
  return (dispatch) => {
    dispatch(progressBar(true));
    getProductsList()
      .then((res) => res.json())
      .then((products) => {
        dispatch(setProductsData(products));
      });
    dispatch(LoadCartList());
  };
};

export const RemoveItemFromCart = (cardInfo) => {
  return (dispatch) => {
    dispatch(progressBar(true));
    removeFromCartList(cardInfo)
      .then((res) => res.json())
      .then((item) => {
        dispatch(LoadCartList(`${cardInfo.image}, Removed item from cart`));
      });
  };
};

export const AddItemToCartList = (cardInfo) => {
  return (dispatch) => {
    dispatch(progressBar(true));
    addToCartList(cardInfo)
      .then((res) => res.json())
      .then((item) => {
        dispatch(LoadCartList(`${cardInfo.image}, added item to cart`));
      });
  };
};

export const AddUserAddress = (addressInfo) => {
  return (dispatch) => {
    dispatch(progressBar(true));
    addAddress(addressInfo)
      .then((res) => res.json())
      .then((res) => {
        dispatch(LoadCartList(`Address Added Successfully`));
      });
  };
};

export const AddCardDetails = (cardDetails) => {
  return (dispatch) => {
    dispatch(progressBar(true));
    addCardDetails(cardDetails)
      .then((res) => res.json())
      .then((res) => {
        dispatch(LoadCartList(`card details Added Successfully`));
      });
  };
};

export const PlaceOrder = (orderInfo) => {
  return (dispatch) => {
    dispatch(progressBar(true));
    placeOrder(orderInfo)
      .then((res) => res.json())
      .then((res) => {
        dispatch(LoadCartList(`Order Placed Successfully`));
      });
  };
};
export const LogoutUser = () => {
  return (dispatch) => {
    dispatch(progressBar(true));
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    dispatch(userInfo({}));
    setTimeout(() => {
      dispatch(progressBar(false));
    }, 2000);
  };
};
