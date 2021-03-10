import React, { useState } from "react";
import Select from "react-select";

export default function RocketSelect({ rockets }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSecondOption = e => {
    setSelectedOption(e);
  };

  const rocketOptions = rockets.map(rocket => {
    return { value: rocket, label: rocket };
  });

  console.log(rocketOptions);
  return (
    <Select
      autosize={false}
      className="basic-single"
      classNamePrefix="select"
      options={rocketOptions}
      onChange={e => handleSecondOption(e ? e.value : "")}
    />
  );
}