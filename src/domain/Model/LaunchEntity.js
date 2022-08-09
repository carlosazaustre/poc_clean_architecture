import { Model } from "./Model";

export class LaunchEntity extends Model {
  static create({ flightNumber, missionName, launchDateLocal, launchSuccess }) {
    return new LaunchEntity({
      flightNumber,
      missionName,
      launchDateLocal,
      launchSuccess,
    });
  }

  constructor({ flightNumber, missionName, launchDateLocal, launchSuccess }) {
    super();
    this._flightNumber = flightNumber;
    this._missionName = missionName;
    this._launchDateLocal = launchDateLocal;
    this._launchSuccess = launchSuccess;
  }

  flightNumber() {
    return this._flightNumber;
  }
  missionName() {
    return this._missionName;
  }
  launchDateLocal() {
    return this._launchDateLocal;
  }
  launchSuccess() {
    return this._launchSuccess;
  }

  toJSON() {
    return {
      flightNumber: this.flightNumber(),
      missionName: this.missionName(),
      launchDateLocal: this.launchDateLocal(),
      launchSuccess: this.launchSuccess(),
    };
  }
}
