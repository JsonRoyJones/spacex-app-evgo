import React, { useState, useEffect } from "react";
import MissionSelect from "./MissionSelect";
import YearSelect from "./YearSelect";
import RocketSelect from "./RocketSelect";

const SecondSearch = ({ searchOption, years, rockets }) => {
  const [secondSearchMenu, setSecondSearchMenu] = useState("");

  useEffect(() => {
    if (searchOption === "" || searchOption === "mission_name") {
      setSecondSearchMenu(<MissionSelect />);
    } else if (searchOption === "launch_year") {
      setSecondSearchMenu(<YearSelect years={years} />);
    } else {
      // set second search menu with Rocket Select
      setSecondSearchMenu(<RocketSelect rockets={rockets} />);
    }
  }, [searchOption]);
  return <div>{secondSearchMenu}</div>;
};

export default SecondSearch;
