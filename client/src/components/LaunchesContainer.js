import React from "react";
import LaunchesAll from "./LaunchesAll";
import YearLaunches from "./YearLaunches";
import MissionLaunches from "./MissionLaunches";
import RocketLaunches from "./RocketLaunches";

export default function LaunchesContainer({
  currentQuery,
  handleQueryChange,
  years,
  handleYears,
  rockets,
  handleRockets,
  yearFilter,
  missionFilter,
  rocketFilter,
  handleMissionFilter,
  searchClicked
}) {
  if (currentQuery === "launch_year" && yearFilter !== 0) {
    return (
      <YearLaunches
        currentQuery={currentQuery}
        handleQueryChange={handleQueryChange}
        years={years}
        yearFilter={yearFilter}
        handleYears={handleYears}
        rockets={rockets}
        handleRockets={handleRockets}
      />
    );
  } else if (currentQuery === "rocket_name" && rocketFilter !== "") {
    return (
      <RocketLaunches
        currentQuery={currentQuery}
        handleQueryChange={handleQueryChange}
        years={years}
        yearFilter={yearFilter}
        handleYears={handleYears}
        rockets={rockets}
        handleRockets={handleRockets}
        rocketFilter={rocketFilter}
        missionFilter={missionFilter}
        handleMissionFilter={handleMissionFilter}
        searchClicked={searchClicked}
      />
    );
  } else if (searchClicked && currentQuery === "mission_name") {
    return (
      <MissionLaunches
        currentQuery={currentQuery}
        handleQueryChange={handleQueryChange}
        years={years}
        yearFilter={yearFilter}
        handleYears={handleYears}
        rockets={rockets}
        handleRockets={handleRockets}
        missionFilter={missionFilter}
        handleMissionFilter={handleMissionFilter}
        searchClicked={searchClicked}
      />
    );
  } else {
    return (
      <LaunchesAll
        currentQuery={currentQuery}
        handleQueryChange={handleQueryChange}
        years={years}
        yearFilter={yearFilter}
        handleYears={handleYears}
        rockets={rockets}
        handleRockets={handleRockets}
      />
    );
  }
}
