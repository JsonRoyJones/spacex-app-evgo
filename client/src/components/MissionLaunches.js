import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import MISSION_QUERY from "../queries/MISSION_QUERY";

export default function MissionLaunches({ missionFilter, searchClicked }) {
  const [launchArr, setLaunchArr] = useState([]);

  let launchData = [];
  useEffect(() => {
    if (launchArr.length !== launchData.length) {
      setLaunchArr(launchData);
    }
    if (searchClicked) {
      lazyMissions();
    }
  }, [searchClicked, launchArr.length, launchData.length]);

  const [lazyMissions, { loading, error, data }] = useLazyQuery(MISSION_QUERY, {
    variables: {
      mission_name: missionFilter
    }
  });
  if (loading)
    return (
      <div className="loading">
        <h4>
          Launches Where mission name contains "{missionFilter}" Loading...
        </h4>
      </div>
    );
  if (error) {
    return <p>Something went wrong, please try again.</p>;
  }
  if (data && data.missionLaunches.length > 0) {
    launchData = data.missionLaunches.map(launch => (
      <LaunchItem
        key={launch.mission_name + launch.flight_number}
        launch={launch}
      />
    ));
    return launchData;
  }
  return (
    <p>
      Sorry, no launches found where mission name contains '{missionFilter}'.
      Please review your search term and try again.
    </p>
  );
}
