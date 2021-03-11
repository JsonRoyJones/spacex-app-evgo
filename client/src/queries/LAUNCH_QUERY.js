import { gql } from "apollo-boost";

// This query accepts a variable indicating flight number which is then mapped to a specific launch returned by the SpaceX API
// This is done when a user clicks for more info about a specific launch
export default gql`
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
