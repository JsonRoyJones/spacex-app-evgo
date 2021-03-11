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
  let yearOptions = [];
  let rocketOptions = [];

  useEffect(() => {
    if (launchArr.length < launchData.length) {
      setLaunchArr(launchData);
    }
    if (years.length < 1) {
      handleYears(yearOptions);
    }
    if (rockets.length < 1) {
      handleRockets(rocketOptions);
    }
  }, [years.length, rockets.length, launchArr.length]);

  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading)
    return (
      <div className="loading">
        <h4>Launches Loading...</h4>
      </div>
    );
  if (error) return <p>Something went wrong, please try again.</p>;
  if (data) {
    if (years.length < 1) {
      yearOptions = data.launches.map(launch => {
        return launch.launch_year;
      });
    }
    if (rockets.length < 1) {
      rocketOptions = data.launches.map(launch => {
        return launch.rocket.rocket_name;
      });
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
