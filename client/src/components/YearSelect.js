import React, { useState } from "react";
import Select from "react-select";

export default function YearSelect({ years, handleYearFilter }) {
  const handleSecondOption = e => {
    handleYearFilter(e);
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
