import Select from "react-select";

export default function YearSelect({ years, handleYearFilter }) {
  const handleSecondOption = e => {
    const yearNum = Number(e.value);
    handleYearFilter(yearNum);
  };

  const yearOptions = years.map(year => {
    return { value: year, label: year };
  });

  return (
    <Select
      autosize={false}
      className="basic-single"
      classNamePrefix="select"
      options={yearOptions}
      onChange={e => handleSecondOption(e ? e : "")}
    />
  );
}
