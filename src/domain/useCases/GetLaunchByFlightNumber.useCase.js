import { UseCase } from "./UseCase";
import { LaunchRepository } from "domain/Repositories/Launch.repository";
import { FlightNumberValueObject } from "domain/Model/FlightNumberValueObject";

export class GetLaunchByFlightNumberUseCase extends UseCase {
  static create() {
    const respository = LaunchRepository.create();
    return new GetLaunchByFlightNumberUseCase({ respository });
  }

  constructor({ respository }) {
    super();
    this._respository = respository;
  }

  async execute({ flightNumber }) {
    const flightNumberValueObject = FlightNumberValueObject.create({
      flightNumber,
    });
    const launchEntity = await this._respository.getLaunch({
      flightNumber: flightNumberValueObject,
    });

    return launchEntity.toJSON();
  }
}
