import { Model } from "./Model";
import { LaunchEntity } from "./LaunchEntity";
import { PaginationValueObject } from "./PaginationValueObject";

export class LaunchEntityListAggregate extends Model {
  static create({ launchEntityList, pagination }) {
    const { page, totalPages, totalResults } = pagination;
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
      }),
      pagination: PaginationValueObject.create({
        page,
        totalPages,
        totalResults,
      }),
    });
  }

  constructor({ launchEntityList, pagination }) {
    super();
    this._launchEntityList = launchEntityList;
    this._pagination = pagination;
  }

  launchEntityList() {
    return this._launchEntityList;
  }

  pagination() {
    return this._pagination;
  }

  toJSON() {
    return {
      launchEntityList: this.launchEntityList().map((entity) =>
        entity.toJSON()
      ),
      pagination: this.pagination().toJSON(),
    };
  }
}
