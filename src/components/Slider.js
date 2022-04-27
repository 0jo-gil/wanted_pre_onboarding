import React, { useState } from "react";

const Slider = () => {
  // input range 값 저장
  const [range, setRange] = useState(0);
  // input 값 변경 이벤트
  const changeHandler = (e) => {
    //input range 값
    let value = e.target.valueAsNumber;
    // state에 input range 값 저장
    setRange(value);
  };
  // input 하단 퍼센테이지 클릭 이벤트
  const customHandler = (e) => {
    // 퍼센테이지 텍스트를 가져와 숫자 변환
    let value = parseInt(e.target.textContent.split("%")[0]);
    // state에 클릭한 range 값 저장
    setRange(value);
  };
  // input 하단 퍼센테이지 클릭 버튼 생성
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
      {/* title */}
      <h1 className="title">Slider</h1>
      {/* range 값 텍스트 */}
      <div className="range-num">
        <p>
          <span>{range}</span> %
        </p>
      </div>
      <div className="change-wrap">
        {/* input */}
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
        {/* input 하단 퍼센테이지 버튼 */}
        <ul className="custom-range">{custom()}</ul>
      </div>
    </div>
  );
};

export default Slider;
