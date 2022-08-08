import { UseCase } from "./UseCase";
import { LaunchRepository } from "domain/Repositories/Launch.repository";

export class GetLaunchListUseCase extends UseCase {
  static create() {
    const repository = LaunchRepository.create();
    return new GetLaunchListUseCase({ repository });
  }

  constructor({ repository }) {
    super();
    this._repository = repository;
  }

  async execute() {
    const launchEntityListAggregate = await this._repository.getLaunchesList();

    return launchEntityListAggregate.toJSON();
  }
}
