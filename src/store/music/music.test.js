import { GET_ALBUM, GET_SINGLE_ALBUM } from "./actionType";
import { musicReducer } from "./reducer";

describe("Music Reducer", () => {
  it("Should return default state", () => {
    const newState = musicReducer(undefined, {});
    expect(newState).toEqual({});
  });

  it("Should return Albums when the type is GET_ALBUM", () => {
    const payloadValue = [
      {
        userId: 1,
        id: 1,
        title: "quidem molestiae enim"
      },
      {
        userId: 1,
        id: 2,
        title: "sunt qui excepturi placeat culpa"
      }
    ];

    const newState = musicReducer(undefined, {
      type: GET_ALBUM,
      payload: payloadValue
    });
    expect(newState.albums).toEqual(payloadValue);
  });

  it("Should return ParticularAlbum when the type is GET_SINGLE_ALBUM", () => {
    const payloadValue = [
      {
        albumId: 2,
        id: 51,
        title: "non sunt voluptatem placeat consequuntur rem incidunt",
        url: "https://via.placeholder.com/600/8e973b",
        thumbnailUrl: "https://via.placeholder.com/150/8e973b"
      },
      {
        albumId: 2,
        id: 52,
        title: "eveniet pariatur quia nobis reiciendis laboriosam ea",
        url: "https://via.placeholder.com/600/121fa4",
        thumbnailUrl: "https://via.placeholder.com/150/121fa4"
      }
    ];

    const newState = musicReducer(undefined, {
      type: GET_SINGLE_ALBUM,
      payload: payloadValue
    });
    expect(newState.particularAlbum).toEqual(payloadValue);
  });
});
