import React, { useState, useEffect } from "react";
import MissionSelect from "./MissionSelect";
import YearSelect from "./YearSelect";
import RocketSelect from "./RocketSelect";

const SecondSearch = ({
  searchOption,
  years,
  yearFilter,
  handleYearFilter,
  rockets,
  rocketFilter,
  handleRocketFilter,
  missionFilter,
  handleMissionFilter,
  handleSearchClicked
}) => {
  const [secondSearchMenu, setSecondSearchMenu] = useState("");

  useEffect(() => {
    if (searchOption === "mission_name") {
      setSecondSearchMenu(
        <MissionSelect
          missionFilter={missionFilter}
          handleMissionFilter={handleMissionFilter}
          handleSearchClicked={handleSearchClicked}
        />
      ); // renders text input
    } else if (searchOption === "launch_year") {
      setSecondSearchMenu(
        <YearSelect //renders dropdown with years
          years={years}
          yearFilter={yearFilter}
          handleYearFilter={handleYearFilter}
        />
      );
    } else if (searchOption === "rocket_name") {
      // set second search menu with Rocket Select
      setSecondSearchMenu(
        <RocketSelect
          rockets={rockets}
          rocketFilter={rocketFilter}
          handleRocketFilter={handleRocketFilter}
        />
      ); //renders dropdown
    } else setSecondSearchMenu(null);
  }, [searchOption]);
  return <div>{secondSearchMenu}</div>;
};

export default SecondSearch;
