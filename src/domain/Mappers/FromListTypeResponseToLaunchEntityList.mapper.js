import { Mapper } from "./Mapper";
import { LaunchEntity } from "domain/Model/LaunchEntity";
import { LaunchEntityListAggregate } from "domain/Model/LaunchEntityListAggregate";
import { PaginationValueObject } from "domain/Model/PaginationValueObject";

export class FromListTypeResponseToLaunchEntityListMapper extends Mapper {
  static create() {
    return new FromListTypeResponseToLaunchEntityListMapper();
  }

  map(rawApiResponse) {
    const { results, page, total_pages, total_results } = rawApiResponse;

    const launchEntityList = results?.map((launch) => {
      const { flight_number, mission_name, launch_date_local, launch_success } =
        launch;

      const launchEntity = LaunchEntity.create({
        flightNumber: flight_number,
        missionName: mission_name,
        launchDateLocal: launch_date_local,
        launchSuccess: launch_success,
      });

      return launchEntity;
    });

    const paginationValueObject = PaginationValueObject.create({
      page,
      totalPages: total_pages,
      totalResults: total_results,
    });

    const launchEntityListAggregate = LaunchEntityListAggregate.create({
      pagination: paginationValueObject.toJSON(),
      launchEntityList: launchEntityList.map((entity) => entity.toJSON()),
    });

    return launchEntityListAggregate;
  }
}
