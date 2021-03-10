import React, { useState, createContext } from "react";
import LaunchesQuery from "../queries/LaunchesQuery";
import MissionKey from "./MissionKey";
import SearchContainer from "./SearchContainer";

export default function Launches() {
  const [currentQuery, setQuery] = useState("launches");
  const [years, setYears] = useState([]);
  const [rockets, setRockets] = useState([]);

  const handleYears = yearArr => {
    const yearSet = new Set(yearArr);
    setYears([...yearSet]);
  };

  const handleRockets = rocketArr => {
    const rocketSet = new Set(rocketArr);
    setRockets([...rocketSet]);
  };

  const toggleQuery = query => {
    console.log("settingQuery with: ", query);
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
        <div className="search-container m-3">
          <SearchContainer
            toggleQuery={toggleQuery}
            years={years}
            handleYears={handleYears}
            rockets={rockets}
            handleRockets={handleRockets}
          />
        </div>
      </div>
      <br />
      <MissionKey />
      <LaunchesQuery
        currentQuery={currentQuery}
        toggleQuery={toggleQuery}
        years={years}
        handleYears={handleYears}
        rockets={rockets}
        handleRockets={handleRockets}
      />
    </>
  );
}
