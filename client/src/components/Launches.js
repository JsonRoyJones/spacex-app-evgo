import React, { useState, createContext } from "react";
import LaunchesContainer from "./LaunchesContainer";
import MissionKey from "./MissionKey";
import SearchContainer from "./SearchContainer";

export default function Launches() {
  const [currentQuery, setQuery] = useState("launches");
  const [years, setYears] = useState([]);
  const [yearFilter, setYearFilter] = useState(0);
  const [rockets, setRockets] = useState([]);

  const handleYears = yearArr => {
    const yearSet = new Set(yearArr);
    setYears([...yearSet]);
  };

  const handleYearFilter = yearSelected => {
    setYearFilter(yearSelected);
  };

  const handleRockets = rocketArr => {
    const rocketSet = new Set(rocketArr);
    setRockets([...rocketSet]);
  };

  const handleQueryChange = query => {
    setQuery(query);
    console.log("settingQuery with: ", currentQuery);
    // let { launch_year } = props.match.params;
    // console.log("in handler for querychange", launch_year);
    // launch_year = parseInt(launch_year);
    // setGqlQuery();
  };
  return (
    <>
      <br />
      <div className="card border-secondary">
        <h2 className="card-header m-3">Launches</h2>
        <h6 className="card-text m-3">
          Use the search bar below to search for SpaceX launches. You may search
          by Mission, Rocket, or Launch Year.
        </h6>
        <p className="ml-3">
          Alternatively, you may scroll through all launches below.
        </p>
        <div className="search-container m-3">
          <SearchContainer
            handleQueryChange={handleQueryChange}
            years={years}
            yearFilter={yearFilter}
            handleYearFilter={handleYearFilter}
            handleYears={handleYears}
            rockets={rockets}
            handleRockets={handleRockets}
          />
        </div>
      </div>
      <br />
      <MissionKey />
      <LaunchesContainer
        currentQuery={currentQuery}
        handleQueryChange={handleQueryChange}
        years={years}
        yearFilter={yearFilter}
        handleYears={handleYears}
        rockets={rockets}
        handleRockets={handleRockets}
      />
    </>
  );
}
