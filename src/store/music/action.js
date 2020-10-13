import request from "../../api/request";
import { GET_ALBUM, GET_SINGLE_ALBUM } from "./actionType";

export const getAlbum = () => {
  return async dispatch => {
    const responseData = await request({
      url: `/albums`,
      method: "GET"
    });
    dispatch({ type: GET_ALBUM, payload: responseData.data });
  };
};

export const getParticularAlbum = data => {
  return async dispatch => {
    const responseData = await request({
      url: `/photos/?albumId=${data}`,
      method: "GET"
    });
    dispatch({ type: GET_SINGLE_ALBUM, payload: responseData.data });
  };
};
