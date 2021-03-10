import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";
import LaunchItem from "../components/LaunchItem";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      rocket {
        rocket_name
      }
      links {
        video_link
      }
    }
  }
`;

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

const YEAR_QUERY = gql`
  query yearLaunches($launch_year: Int!) {
    flight_number
    mission_name
    rocket {
      rocket_name
    }
    launch_year
    launch_date_local
    launch_success
    links {
      video_link
    }
  }
`;

export default function LaunchesQuery(
  {
    currentQuery,
    handleQueryChange,
    years,
    handleYears,
    rockets,
    handleRockets,
    yearFilter
  },
  props
) {
  const [gqlQuery, setGqlQuery] = useState(LAUNCHES_QUERY);
  const [launchArr, setLaunchArr] = useState([]);
  let launchData = [];
  useEffect(() => {
    if (launchArr.length < launchData.length) {
      setLaunchArr(launchData);
    }
    if (currentQuery === "launches") {
      setGqlQuery(LAUNCHES_QUERY);
    } else if (currentQuery === "launch_year") {
      // build query handler
      setGqlQuery(YEAR_QUERY, {
        variables: {
          year: yearFilter
        }
      });

      // setLaunchArr();
      console.log("in useeffect", YEAR_QUERY);
    } else {
      console.log(currentQuery);
    }
  }, [currentQuery, launchData]);

  // next query here for searching by Mission
  // next query here for searching by Rocket
  // next query here for searching by Year
  // determine query and change options here

  const { loading, error, data } = useQuery(gqlQuery);

  if (loading)
    return (
      <div className="loading">
        <h4>Launches Loading...</h4>
      </div>
    );
  if (error) return <p>Something went wrong, please try again.</p>;
  if (data) {
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
