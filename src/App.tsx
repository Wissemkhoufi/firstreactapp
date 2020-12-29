import { Input, Slider } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
import { Multiline } from "./Multiline";
import MultiSelectOption from "./MultiSelectOption";

function App() {
  const [value, setValue] = useState(0);
  const handleSliderChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="flexStartSpaceBetweenRow">
          <div>
            <Slider
              className="editPanelNbrSlider"
              value={value}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              max={100}
            />
            <Input
              value={value}
              margin="none"
              inputProps={{
                className: "progressValueInput",
                step: 10,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </div>
          <br />
          <div>
            <Multiline />
          </div>
          <br />
          <div>
            <MultiSelectOption />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
