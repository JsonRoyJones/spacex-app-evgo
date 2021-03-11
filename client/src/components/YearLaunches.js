import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import YEAR_QUERY from "../queries/YEAR_QUERY";

export default function LaunchesAll({ yearFilter }) {
  const [launchArr, setLaunchArr] = useState([]);
  let launchData = [];

  useEffect(() => {
    if (launchArr.length !== launchData.length) {
      setLaunchArr(launchData);
    }
  });
  const { loading, error, data } = useQuery(YEAR_QUERY, {
    variables: {
      launch_year: yearFilter
    }
  });
  if (loading)
    return (
      <div className="loading">
        <h4>Launches From Year {yearFilter} Loading...</h4>
      </div>
    );
  if (error) {
    return <p>Something went wrong, please try again.</p>;
  }
  if (data) {
    launchData = data.yearLaunches.map(launch => (
      <LaunchItem
        key={launch.mission_name + launch.flight_number}
        launch={launch}
      />
    ));
    return launchArr;
  } else {
    return null;
  }
}
