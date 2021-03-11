import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import LAUNCHES_QUERY from "../queries/LAUNCHES_QUERY";

export default function LaunchesAll({
  years,
  handleYears,
  rockets,
  handleRockets
}) {
  const [launchArr, setLaunchArr] = useState([]);
  let launchData = [];
  useEffect(() => {
    if (launchArr.length < launchData.length) {
      setLaunchArr(launchData);
    }
  });

  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading)
    return (
      <div className="loading">
        <h4>Launches Loading...</h4>
      </div>
    );
  if (error) return <p>Something went wrong, please try again.</p>;
  if (data) {
    // only update this on initial page load to set options for dropdown
    if (years.length < 1) {
      handleYears(
        data.launches.map(launch => {
          return launch.launch_year;
        })
      );
    }
    if (rockets.length < 1) {
      handleRockets(
        data.launches.map(launch => {
          return launch.rocket.rocket_name;
        })
      );
    }
    launchData = data.launches.map(launch => (
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
