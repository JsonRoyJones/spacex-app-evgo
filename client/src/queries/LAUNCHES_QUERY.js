import { gql } from "apollo-boost";

// This query is used for returning all launches on initial page load
export default gql`
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
