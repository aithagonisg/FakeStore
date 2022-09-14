import { createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootReducer } from "./reducer";

export const store = createStore(RootReducer, composeWithDevTools());
