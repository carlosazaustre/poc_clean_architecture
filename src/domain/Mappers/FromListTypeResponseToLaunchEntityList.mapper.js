import { Mapper } from "./Mapper";
import { LaunchEntity } from "domain/Model/LaunchEntity";
import { LaunchEntityListAggregate } from "domain/Model/LaunchEntityListAggregate";

export class FromListTypeResponseToLaunchEntityListMapper extends Mapper {
  static create() {
    return new FromListTypeResponseToLaunchEntityListMapper();
  }
  map(rawApiResponse) {
    const launchEntityList = rawApiResponse?.map((launch) => {
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

    const launchEntityListAggregate = LaunchEntityListAggregate.create({
      launchEntityList: launchEntityList.map((entity) => entity.toJSON()),
    });

    return launchEntityListAggregate;
  }
}
