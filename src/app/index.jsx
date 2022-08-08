import { useState, useEffect } from "react";
import { Heading } from "components";
import { Domain } from "domain";

import { LaunchList } from "./LaunchList";
import "styles/index.css";

export const App = () => {
  const [launches, setLaunches] = useState([]);
  const [launchesLoaded, setLaunchesLoaded] = useState(false);

  useEffect(() => {
    setLaunchesLoaded(false);
    Domain.get("get_launch_list_use_case")
      .execute()
      .then((data) => {
        setLaunches(data.launchEntityList);
        setLaunchesLoaded(true);
      });
  }, []);

  return (
    <div>
      <Heading text="Space X Launches" />
      {!launchesLoaded && <div>Loading data...</div>}
      {launches && launches.length > 0 && <LaunchList launchList={launches} />}
    </div>
  );
};
