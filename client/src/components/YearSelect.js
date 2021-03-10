import React, { useState } from "react";
import Select from "react-select";

export default function YearSelect({ years }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSecondOption = e => {
    setSelectedOption(e);
  };

  const yearOptions = years.map(year => {
    return { value: year, label: year };
  });

  console.log(yearOptions);
  return (
    <Select
      autosize={false}
      className="basic-single"
      classNamePrefix="select"
      options={yearOptions}
      onChange={e => handleSecondOption(e ? e.value : "")}
    />
  );
}
