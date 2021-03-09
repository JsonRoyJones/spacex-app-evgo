import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

function LaunchesQuery() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading)
    return (
      <div className="loading">
        <h4>Loading...</h4>
      </div>
    );
  if (error) return <p>Something went wrong, please try again.</p>;
  console.log(data);
  return data.launches.map(launch => (
    <LaunchItem
      key={launch.mission_name + launch.flight_number} // would have used flight number alone, but there was a duplicate
      launch={launch}
    />
  ));
}

export default function Launches() {
  return (
    <>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      <LaunchesQuery />
    </>
  );
}
