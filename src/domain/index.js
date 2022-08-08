import { GetLaunchByFlightNumberUseCase } from "./useCases/GetLaunchByFlightNumber.useCase";
import { GetLaunchListUseCase } from "./useCases/GetLaunchList.useCase";

const useCases = {
  get_launch_by_flight_number_use_case: GetLaunchByFlightNumberUseCase,
  get_launch_list_use_case: GetLaunchListUseCase,
};

export const Domain = {
  get: (key) => useCases[key].create(),
};
