import React, { useState } from "react";

export default function MissionSelect() {
  const [inputVal, setInputVal] = useState("");

  const onChange = e => {
    setInputVal(e.target.value);
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
        placeholder="Type a portion of Mission name to find relevant launches"
        value={inputVal}
        onChange={onChange}
      />
    </>
  );
}
