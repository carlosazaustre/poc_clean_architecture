import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Domain } from "../../../domain/";

import launchListApiResponse from "./fixtures/launchListApiResponse.json";
import getLaunchListUseCaseResponse from "./fixtures/GetLaunchListUseCaseResponse.json";

const mock = new MockAdapter(axios);

describe("GetLaunchList UseCase", () => {
  beforeEach(() => {
    mock.reset();
  });

  afterEach(() => {
    mock.reset();
  });

  it("Should return the first page launches results from API", async () => {
    mock
      .onGet(`https://api.spacexdata.com/v3/launches`)
      .reply(200, launchListApiResponse);

    const useCaseResponse = await Domain.get(
      "get_launch_list_use_case"
    ).execute({
      pageNumber: 0,
    });

    expect(useCaseResponse).toEqual(getLaunchListUseCaseResponse);
  });
});
