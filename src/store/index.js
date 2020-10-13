import { combineReducers } from "redux";

import { musicReducer } from "./music";

export default combineReducers({
  music: musicReducer
});
