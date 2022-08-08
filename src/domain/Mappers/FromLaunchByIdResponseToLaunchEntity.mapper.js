import { Mapper } from "./Mapper";
import { LaunchEntity } from "domain/Model/LaunchEntity";

export class FromLaunchByIdResponseToLaunchEntityMapper extends Mapper {
  static create() {
    return new FromLaunchByIdResponseToLaunchEntityMapper();
  }

  map(rawApiResponse) {
    const { flight_number, mission_name, launch_date_local, launch_success } =
      rawApiResponse;

    const launchEntity = LaunchEntity.create({
      fligthNumber: flight_number,
      missionName: mission_name,
      launchDateLocal: launch_date_local,
      launchSuccess: launch_success,
    });

    return launchEntity;
  }
}
