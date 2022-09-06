import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootReducer } from "./reducer";

export const store = createStore(RootReducer, composeWithDevTools());
