import { USER_INFO } from "./ActionTypes";
export const userInfo = (data) => ({
  type: USER_INFO,
  payload: data,
});
