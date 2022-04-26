import React, { useState, useRef } from "react";

const Toggle = () => {
  const toggleList = [
    { id: 0, title: "기본" },
    { id: 1, title: "상세" },
  ];
  const [listIndex, setListIndex] = useState(0);
  const [posX, setPosX] = useState(0);

  const clickHandler = (e, id) => {
    let x = e.target.offsetLeft;

    setListIndex(id);
    setPosX(x);
  };

  return (
    <div className="toggle-wrap">
      <h1 className="title">TOGGLE</h1>
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
