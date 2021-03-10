import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import YEAR_QUERY from "../queries/YEAR_QUERY";

export default function LaunchesAll({ yearFilter }) {
  const [launchArr, setLaunchArr] = useState([]);
  let launchData = [];

  useEffect(() => {
    if (launchArr.length < launchData.length) {
      setLaunchArr(launchData);
    }
  });
  console.log(typeof yearFilter, ": ", yearFilter);
  const { loading, error, data } = useQuery(YEAR_QUERY, {
    variables: {
      launch_year: yearFilter
    }
  });
  console.log(typeof yearFilter, ": ", yearFilter);
  console.log(YEAR_QUERY);
  if (loading)
    return (
      <div className="loading">
        <h4>Launches From Year {yearFilter} Loading...</h4>
      </div>
    );
  if (error) {
    console.log(error);
    return <p>Something went wrong, please try again.</p>;
  }
  if (data) {
    console.log(data);
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
