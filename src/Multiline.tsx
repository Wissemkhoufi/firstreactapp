import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

export const Multiline = () => {
  const [value, setValue] = useState("");
  const handleValueChange = (event: any) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };
  return (
    <div className="flexStartSpaceBetweenRow">
      <TextField
        value={value}
        onChange={handleValueChange}
        size="small"
        variant="outlined"
        multiline={true}
      />
    </div>
  );
};
