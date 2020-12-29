import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const Options = [
  { value: "Option1", label: "Option 1" },
  { value: "Option2", label: "Option 2" },
  { value: "Option3", label: "Option 3" },
];

function MultiSelectOption() {
  const [value, setValue] = useState(null);
  const animatedComponents = makeAnimated();
  const handleValueChange = (newValue: any) => {
    setValue(newValue);
  };
  return (
    <div>
      <Select
        isMulti
        name="colors"
        components={animatedComponents}
        options={Options}
        className="basic-multi-select"
        classNamePrefix="select"
        closeMenuOnSelect
        onChange={handleValueChange}
        value={value}
      />
    </div>
  );
}
export default MultiSelectOption;
