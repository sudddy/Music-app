import { applyMiddleware, compose, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./store/index";

export const middlewares = [ReduxThunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
