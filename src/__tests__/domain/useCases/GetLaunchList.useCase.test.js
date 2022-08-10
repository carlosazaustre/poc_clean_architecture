import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Domain } from "../../../domain/";
import config from "domain/config";

import launchListApiResponse from "./fixtures/launchListApiResponse.json";
import getLaunchListUseCaseResponse from "./fixtures/GetLaunchListUseCaseResponse.json";

const mock = new MockAdapter(axios);
const { API_URL } = config;

describe("GetLaunchList UseCase", () => {
  beforeEach(() => {
    mock.reset();
  });

  afterEach(() => {
    mock.reset();
  });

  test("Should return the first 10 launches from API", async () => {
    mock.onGet(`${API_URL}/launches`).reply(200, launchListApiResponse);

    const useCaseResponse = await Domain.get(
      "get_launch_list_use_case"
    ).execute({
      pageNumber: 1,
    });

    expect(useCaseResponse.launchEntityList).toEqual(
      getLaunchListUseCaseResponse.launchEntityList
    );
  });
});
