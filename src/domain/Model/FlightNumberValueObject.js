import { Model } from "./Model";
//TODO: error de invalid ID

export class FlightNumberValueObject extends Model {
  static create({ flightNumber }) {
    return new FlightNumberValueObject({ flightNumber });
  }

  //TODO: static validate({ flightNumber })

  constructor({ flightNumber }) {
    super();
    this._flightNumber = flightNumber;
  }

  value() {
    return this._flightNumber;
  }

  toJSON() {
    return {
      flightNumber: this.value(),
    };
  }
}
