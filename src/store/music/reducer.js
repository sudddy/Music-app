import { GET_ALBUM, GET_SINGLE_ALBUM } from "./actionType";

const initialState = {};

export const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUM:
      return { ...state, albums: action.payload };
    case GET_SINGLE_ALBUM:
      return { ...state, particularAlbum: action.payload };
    default:
      return state;
  }
};
