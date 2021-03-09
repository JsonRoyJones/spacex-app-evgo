import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      links {
        video_link
      }
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
      <br />
      <div className="card border-secondary mb-3">
        <h2 className="card-header m-3">Launches</h2>
        <h6 className="card-text m-3">
          Use the search bar below to search for SpaceX launches. You may search
          by Mission, Rocket, or Launch Year.
        </h6>
        <div className="search-container m-3">// Search Component</div>
      </div>
      <br />
      <MissionKey />
      <LaunchesQuery />
    </>
  );
}
