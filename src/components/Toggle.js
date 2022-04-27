import React, { useState, useRef } from "react";

const Toggle = () => {
  // 탭 메뉴 리스트
  const toggleList = [
    { id: 0, title: "기본" },
    { id: 1, title: "상세" },
  ];
  // 리스트 순서 값
  const [listIndex, setListIndex] = useState(0);
  // x 값
  const [posX, setPosX] = useState(0);

  // 클릭 이벤트
  const clickHandler = (e, id) => {
    // 해당 클릭 탭메뉴 x좌표 변수
    let x = e.target.offsetLeft;
    // 탭메뉴 id값을 받아와 state 저장
    setListIndex(id);
    // 탭메뉴 x좌표 저장
    setPosX(x);
  };

  return (
    <div className="toggle-wrap">
      {/* title */}
      <h1 className="title">TOGGLE</h1>
      {/* tab menu */}
      <ul>
        <li className="slide" style={{ left: `${posX}px` }}></li>
        {toggleList.map((list, index) => (
          <li
            className={listIndex === index ? "active" : ""}
            key={list.id}
            onClick={(e) => clickHandler(e, list.id)}
          >
            {list.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Toggle;
