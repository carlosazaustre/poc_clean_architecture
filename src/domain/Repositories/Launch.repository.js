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

  async getLaunchesList({ pageNumber }) {
    const { API_URL, pageSize } = config;
    const pageNumberValue = pageNumber.value();
    const url = `${API_URL}/launches`;
    const response = await this._fetcher
      .get(url)
      .then((response) => response.data);

    // We made a custom pagination here, to return a rawAPIResponse to the caller in a better format.
    const totalResults = response.length;
    const totalPages = totalResults / pageSize;
    const results = response.slice(
      +pageNumberValue * pageSize,
      (+pageNumberValue + 1) * pageSize
    );

    const rawApiResponse = {
      results,
      page: pageNumberValue,
      total_pages: totalPages,
      total_results: totalResults,
    };

    const launchEntityListMapper =
      FromListTypeResponseToLaunchEntityListMapper.create();

    return launchEntityListMapper.map(rawApiResponse);
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
