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
