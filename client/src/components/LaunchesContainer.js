import React from "react";
import LaunchesAll from "./LaunchesAll";
import YearLaunches from "./YearLaunches";

export default function LaunchesContainer(
  {
    currentQuery,
    handleQueryChange,
    years,
    handleYears,
    rockets,
    handleRockets,
    yearFilter
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
