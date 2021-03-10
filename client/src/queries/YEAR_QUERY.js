import { gql } from "apollo-boost";

export default gql`
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
