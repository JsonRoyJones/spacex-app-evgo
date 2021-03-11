import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import ROCKET_QUERY from "../queries/ROCKET_QUERY";

export default function LaunchesAll({ rocketFilter }) {
  const [launchArr, setLaunchArr] = useState([]);
  let launchData = [];

  useEffect(() => {
    if (launchArr.length !== launchData.length) {
      setLaunchArr(launchData);
    }
  });

  const { loading, error, data } = useQuery(ROCKET_QUERY, {
    variables: {
      rocket_name: rocketFilter
    }
  });
  if (loading)
    return (
      <div className="loading">
        <h4>Launches with {rocketFilter} Rockets Loading...</h4>
      </div>
    );
  if (error) {
    return <p>Something went wrong, please try again.</p>;
  }
  if (data) {
    launchData = data.rocketLaunches.map(launch => (
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
