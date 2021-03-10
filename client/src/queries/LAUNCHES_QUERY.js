import { gql } from "apollo-boost";

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
