import { CardInfo } from "components";

export const LaunchList = ({ launchList = [] }) => {
  return launchList.map((launch) => {
    const { flightNumber, missionName, launchDateLocal, launchSuccess } =
      launch;

    return (
      <CardInfo
        key={flightNumber}
        flightNumber={flightNumber}
        missionName={missionName}
        launchDateLocal={launchDateLocal}
        launchSuccess={launchSuccess}
      />
    );
  });
};
