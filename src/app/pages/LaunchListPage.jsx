import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Heading } from "components";
import { Domain } from "domain";

import { LaunchList } from "../components/LaunchList";
import { Pagination } from "../components/Pagination";
import "styles/index.css";

export const LaunchListPage = () => {
  const [launches, setLaunches] = useState([]);
  const [{ page, totalPages, totalResults }, setPagination] = useState({});
  const [launchesLoaded, setLaunchesLoaded] = useState(false);
  const { pageNumber } = useParams();

  useEffect(() => {
    setLaunchesLoaded(false);
    Domain.get("get_launch_list_use_case")
      .execute({ pageNumber })
      .then((data) => {
        setLaunches(data.launchEntityList);
        setPagination(data.pagination);
        setLaunchesLoaded(true);
      });
  }, [pageNumber]);

  return (
    <div>
      <Heading text="Space X Launches" />
      <Pagination
        page={page}
        totalPages={totalPages}
        totalResults={totalResults}
      />
      {!launchesLoaded && <div>Loading data...</div>}
      {launches && launches.length > 0 && <LaunchList launchList={launches} />}
    </div>
  );
};
