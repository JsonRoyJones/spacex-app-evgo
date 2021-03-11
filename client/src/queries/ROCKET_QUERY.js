import { gql } from "apollo-boost";

// This query is used to filter by rocket_name, only returning launches that match the given rocket_name
export default gql`
  query RocketQuery($rocket_name: String!) {
    rocketLaunches(rocket_name: $rocket_name) {
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
  }
`;
