import React, { useState } from "react";
// import { loadMissionLaunches } from "./MissionLaunches";

export default function MissionSelect({
  handleMissionFilter,
  handleSearchClicked
}) {
  const [inputVal, setInputVal] = useState("");
  const [isDisabled, setDisabled] = useState(true);

  const onChange = e => {
    setInputVal(e.target.value);
    if (e.target.value !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <input
        style={{
          width: "100%",
          borderColor: "silver",
          borderRadius: "4px",
          borderWidth: "1px"
        }}
        className="form-control"
        type="search"
        placeholder="search for any mission names containing this text"
        value={inputVal}
        onChange={onChange}
      />
      <div
        className={`btn btn-primary mt-2 ${isDisabled ? "disabled" : ""}`}
        style={{ borderRadius: "4px" }}
        onClick={() => {
          handleMissionFilter(inputVal);
          handleSearchClicked();
        }}
      >
        Search
      </div>
    </>
  );
}
