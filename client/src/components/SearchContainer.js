import React, { useState } from "react";
import SecondSearch from "./SecondSearch";
import Select from "react-select";

const SearchContainer = ({
  handleQueryChange,
  years,
  yearFilter,
  handleYearFilter,
  rockets,
  missionFilter,
  handleMissionFilter,
  handleSearchClicked
}) => {
  const [searchOption, setSearchOption] = useState("");

  const options = [
    { value: "mission_name", label: "Mission" },
    { value: "rocket_name", label: "Rocket" },
    { value: "launch_year", label: "Launch Year" }
  ];

  const handleFirstOption = val => {
    setSearchOption(val);
    handleQueryChange(val);
  };

  return (
    <>
      <hr />
      <div className="search-container">
        <h6>Search by: </h6>
        <Select
          className="basic-single"
          classNamePrefix="select"
          isClearable
          options={options}
          onChange={e => handleFirstOption(e ? e.value : "")}
        />
        <form className="form-inline mt-2 lg">
          <div
            className="select-dropdown"
            style={{ width: "100%", marginBottom: "7px" }}
          >
            <SecondSearch
              searchOption={searchOption}
              years={years}
              yearFilter={yearFilter}
              handleYearFilter={handleYearFilter}
              rockets={rockets}
              missionFilter={missionFilter}
              handleMissionFilter={handleMissionFilter}
              handleSearchClicked={handleSearchClicked}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchContainer;
