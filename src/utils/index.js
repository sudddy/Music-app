import { applyMiddleware, createStore } from "redux";
import rootReducer from "../store";
import { middlewares } from "../createStore";

export const findByTestArr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const testStore = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};
