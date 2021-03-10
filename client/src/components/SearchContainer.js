import React, { useState } from "react";
import SecondSearch from "./SecondSearch";
import Select from "react-select";

const SearchContainer = ({ toggleQuery, years, rockets }) => {
  // this tells us React which component to load on condition of search category
  const [searchOption, setSearchOption] = useState("");
  const [isDisabled, setDisabled] = useState(true);

  const options = [
    { value: "mission_name", label: "Mission" },
    { value: "rocket_name", label: "Rocket" },
    { value: "launch_year", label: "Launch Year" }
  ];

  const handleFirstOption = val => {
    setSearchOption(val);
    if (val === "") {
      setDisabled(true);
      toggleQuery("launches");
    } else {
      setDisabled(false);
      console.log("searchcontainer", val);
      toggleQuery(searchOption);
    }
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
              rockets={rockets}
            />
          </div>
          <div
            className={`btn btn-primary m-0 ${isDisabled ? "disabled" : ""}`}
          >
            Search
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchContainer;
