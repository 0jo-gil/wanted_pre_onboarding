import React, { useState } from "react";

const Slider = () => {
  const [range, setRange] = useState(0);
  const changeHandler = (e) => {
    let value = e.target.valueAsNumber;

    setRange(value);
  };
  const customHandler = (e) => {
    let value = parseInt(e.target.textContent.split("%")[0]);
    setRange(value);
    console.log(value);
  };

  const custom = () => {
    const result = [];
    for (let i = 0; i < 5; i++) {
      result.push(
        <li key={25 * i} onClick={(e) => customHandler(e)}>
          {25 * i}%
        </li>
      );
    }
    return result;
  };
  return (
    <div className="slider-wrap">
      <h1 className="title">Slider</h1>
      <div className="range-num">
        <p>
          <span>{range}</span> %
        </p>
      </div>
      <div className="change-wrap">
        <input
          onChange={changeHandler}
          className="range"
          type="range"
          name="range"
          id="range"
          min={0}
          max={100}
          value={range}
        />
        <ul className="custom-range">{custom()}</ul>
      </div>
    </div>
  );
};

export default Slider;
