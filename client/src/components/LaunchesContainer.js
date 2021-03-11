import React from "react";
import LaunchesAll from "./LaunchesAll";
import YearLaunches from "./YearLaunches";
import MissionLaunches from "./MissionLaunches";

export default function LaunchesContainer(
  {
    currentQuery,
    handleQueryChange,
    years,
    handleYears,
    rockets,
    handleRockets,
    yearFilter,
    missionFilter,
    handleMissionFilter,
    searchClicked
  },
  props
) {
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
  } else if (searchClicked && currentQuery === "mission_name") {
    return [
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
    ];
  } else {
    return [
      <LaunchesAll
        currentQuery={currentQuery}
        handleQueryChange={handleQueryChange}
        years={years}
        yearFilter={yearFilter}
        handleYears={handleYears}
        rockets={rockets}
        handleRockets={handleRockets}
      />
    ];
  }

  // return (
  //   <div>
  //     // render initial component for LaunchesAll default but if year or rocket
  //     selected, render a different component
  //     <LaunchesContainer />
  //   </div>
  // );
}
