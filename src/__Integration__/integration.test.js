import axios from "axios";
import moxios from "moxios";
import { getAlbum, getParticularAlbum } from "../store/music";
import { testStore } from "../utils/index";

describe("get Album action", () => {
  let axiosInstance = axios.create();
  beforeEach(() => {
    moxios.install(axiosInstance);
  });

  afterEach(() => {
    moxios.uninstall(axiosInstance);
  });

  it("Fetching get Albums", async () => {
    const expectedState = [
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

    const store = testStore();
    store.dispatch(getAlbum()).then(() => {
      const newState = store.getState();
      console.log(newState);
      expect(newState).toBe(expectedState);
    });

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      const response = {
        status: 200,
        response: expectedState
      };
      request.respondWith(response);
    });
  });

  it("Fetching get Photos", async () => {
    const expectedState = [
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

    const store = testStore();
    store.dispatch(getParticularAlbum()).then(() => {
      const newState = store.getState();
      console.log(newState);
      expect(newState).toBe(expectedState);
    });

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      const response = {
        status: 200,
        response: expectedState
      };
      request.respondWith(response);
    });
  });
});
