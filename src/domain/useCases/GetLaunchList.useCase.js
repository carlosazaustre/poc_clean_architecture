import { UseCase } from "./UseCase";
import { LaunchRepository } from "domain/Repositories/Launch.repository";
import { PageNumberValueObject } from "domain/Model/PageNumberValueObject";

export class GetLaunchListUseCase extends UseCase {
  static create() {
    const repository = LaunchRepository.create();
    return new GetLaunchListUseCase({ repository });
  }

  constructor({ repository }) {
    super();
    this._repository = repository;
  }

  async execute({ pageNumber }) {
    const pageNumberValueObject = PageNumberValueObject.create({ pageNumber });
    const launchEntityListAggregate = await this._repository.getLaunchesList({
      pageNumber: pageNumberValueObject,
    });

    return launchEntityListAggregate.toJSON();
  }
}
