import { gql } from "apollo-boost";

export default gql`
  query MissionQuery($mission_name: String!) {
    missionLaunches(mission_name: $mission_name) {
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
