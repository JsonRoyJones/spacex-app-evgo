import React, { useState } from "react";
import LaunchesContainer from "./LaunchesContainer";
import MissionKey from "./MissionKey";
import SearchContainer from "./SearchContainer";

export default function Launches() {
  const [currentQuery, setQuery] = useState("launches");
  const [years, setYears] = useState([]);
  const [yearFilter, setYearFilter] = useState(0);
  const [rockets, setRockets] = useState([]);
  const [rocketFilter, setRocketFilter] = useState("");
  const [missionFilter, setMissionFilter] = useState("");
  const [searchClicked, setSearchClicked] = useState(false);

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

  const handleRocketFilter = rocketSelected => {
    setRocketFilter(rocketSelected);
  };

  const handleMissionFilter = mission => {
    setMissionFilter(mission);
  };

  const handleSearchClicked = () => {
    setSearchClicked(true);
  };

  const handleQueryChange = query => {
    setQuery(query);
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
        <p className="ml-3 mt-0">
          Alternatively, you may scroll through all launches below.
        </p>
        <p className="ml-3 mt-0">
          Please note that mission names are unique as provided by SpaceX API.
          For best results, use generic search terms such as 'star' for
          Starlink, 'sat', 'tel', etc.
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
            rocketFilter={rocketFilter}
            handleRocketFilter={handleRocketFilter}
            handleMissionFilter={handleMissionFilter}
            searchClicked={searchClicked}
            handleSearchClicked={handleSearchClicked}
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
        rocketFilter={rocketFilter}
        handleRocketFilter={handleRocketFilter}
        missionFilter={missionFilter}
        handleMissionFilter={handleMissionFilter}
        searchClicked={searchClicked}
      />
    </>
  );
}
