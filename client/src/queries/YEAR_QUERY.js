import { gql } from "apollo-boost";

export default gql`
  query YearQuery($launch_year: Int!) {
    yearLaunches(launch_year: $launch_year) {
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
