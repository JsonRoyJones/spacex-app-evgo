import React, { useState } from "react";

export default function MissionSelect() {
  const [inputVal, setInputVal] = useState("");

  const onChange = e => {
    setInputVal(e.target.value);
  };

  return (
    <>
      <input
        style={{ width: "auto" }}
        className="form-control"
        type="search"
        placeholder="Select 1 from above"
        value={inputVal}
        onChange={onChange}
      />
    </>
  );
}
