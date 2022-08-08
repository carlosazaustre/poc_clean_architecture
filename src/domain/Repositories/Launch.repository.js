import { Repository } from "./Repository";
import { HttpFetcher } from "domain/Fetchers/Http.fetcher";
import { FromLaunchByIdResponseToLaunchEntityMapper } from "domain/Mappers/FromLaunchByIdResponseToLaunchEntity.mapper";
import { FromListTypeResponseToLaunchEntityListMapper } from "domain/Mappers/FromListTypeResponseToLaunchEntityList.mapper";
import config from "domain/config";

export class LaunchRepository extends Repository {
  static create() {
    const fetcher = HttpFetcher.create();
    return new LaunchRepository({ fetcher });
  }

  constructor({ fetcher }) {
    super();
    this._fetcher = fetcher;
  }

  async getLaunchesList() {
    const { API_URL } = config;
    const url = `${API_URL}/launches`;
    const response = await this._fetcher
      .get(url)
      .then((response) => response.data);

    const launchEntityListMapper =
      FromListTypeResponseToLaunchEntityListMapper.create();

    return launchEntityListMapper.map(response);
  }

  async getLaunch({ flightNumber }) {
    const { API_URL } = config;
    const url = `${API_URL}/launches/${flightNumber}`;
    const response = await this._fetcher
      .get(url)
      .then((response) => response.data);

    const launchEntityMapper =
      FromLaunchByIdResponseToLaunchEntityMapper.create();

    return launchEntityMapper.map(response);
  }
}
