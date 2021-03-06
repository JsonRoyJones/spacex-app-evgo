import React from "react";
import classNames from "classnames";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const LaunchItem = ({
  launch: {
    flight_number,
    mission_name,
    rocket: { rocket_name },
    launch_date_local,
    links: { video_link },
    launch_success
  }
}) => {
  const handleVidClick = () => {
    if (video_link != null) window.open(video_link, "_blank");
  };
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission:{" "}
            <span
              className={classNames({
                "text-success": launch_success,
                "text-danger": !launch_success
              })}
            >
              {" "}
              {mission_name}{" "}
            </span>
          </h4>
          <p className="m-0">
            Launch Date:{" "}
            <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
          </p>
          <p className="m-0">Rocket Name: {rocket_name}</p>
        </div>
        <div className="row ml-0">
          <div className="col-m-3">
            <div
              className={`btn btn-secondary btn-sm ${
                video_link !== null ? "" : "disabled"
              }`}
              onClick={handleVidClick}
            >
              Video Link
            </div>
          </div>
          <div className="col-m-3">
            <Link
              to={`/launch/${flight_number}`}
              className="btn btn-secondary btn-sm"
            >
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LaunchItem;
