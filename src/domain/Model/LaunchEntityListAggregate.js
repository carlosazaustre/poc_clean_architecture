import { Model } from "./Model";
import { LaunchEntity } from "./LaunchEntity";

export class LaunchEntityListAggregate extends Model {
  static create({ launchEntityList }) {
    return new LaunchEntityListAggregate({
      launchEntityList: launchEntityList.map((entity) => {
        const { flightNumber, missionName, launchDateLocal, launchSuccess } =
          entity;
        return LaunchEntity.create({
          flightNumber,
          missionName,
          launchDateLocal,
          launchSuccess,
        });
        //TODO: pagination
      }),
    });
  }

  constructor({ launchEntityList }) {
    super();
    this._launchEntityList = launchEntityList;
    //TODO: pagination
  }

  launchEntityList() {
    return this._launchEntityList;
  }

  toJSON() {
    return {
      launchEntityList: this.launchEntityList().map((entity) =>
        entity.toJSON()
      ),
    };
  }
}
