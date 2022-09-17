export const API_ORGN = "http://localhost:8080";
export const AuthLoginRegister = async (path, body) => {
  return await fetch(`${API_ORGN}/${path}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

export const getProductsList = async () => {
  return await fetch(`${API_ORGN}/products`);
};

export const getCartAndOrdersList = async () => {
  const token = localStorage.getItem("token");
  return await fetch(`${API_ORGN}/getCartAndOrderList`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: `Bearer ${token}`,
    },
  });
};

export const addToCartList = async (data) => {
  const token = localStorage.getItem("token");
  return await fetch(`${API_ORGN}/addtocart`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: `Bearer ${token}`,
    },
  });
};

export const removeFromCartList = async (data) => {
  const token = localStorage.getItem("token");
  return await fetch(`${API_ORGN}/removefromcart`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: `Bearer ${token}`,
    },
  });
};

export const addAddress = async (data) => {
  const token = localStorage.getItem("token");
  return await fetch(`${API_ORGN}/addaddress`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: `Bearer ${token}`,
    },
  });
};

export const addCardDetails = async (data) => {
  const token = localStorage.getItem("token");
  return await fetch(`${API_ORGN}/addcarddetails`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: `Bearer ${token}`,
    },
  });
};

export const placeOrder = async (data) => {
  const token = localStorage.getItem("token");
  return await fetch(`${API_ORGN}/placeOrder`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: `Bearer ${token}`,
    },
  });
};

export const updateUserInfo = async (data) => {
  const token = localStorage.getItem("token");
  return await fetch(`${API_ORGN}/updateuserinfo`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: `Bearer ${token}`,
    },
  });
};

export const updatePassword = async (data) => {
  const token = localStorage.getItem("token");
  return await fetch(`${API_ORGN}/changepassword`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      authorization: `Bearer ${token}`,
    },
  });
};
