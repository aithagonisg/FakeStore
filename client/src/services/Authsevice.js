const API_ORGN = "http://localhost:8080";
export const AuthLoginRegister = async (path, body) => {
  return await fetch(`${API_ORGN}/${path}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
