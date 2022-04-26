import React, { useState } from "react";

const Tab = () => {
  const TabList = [
    { id: 0, title: "감자" },
    { id: 1, title: "고구마" },
    { id: 2, title: "카레라이스" },
  ];

  const [listIndex, setListIndex] = useState(0);
  const [posX, setPosX] = useState(0);

  const clickHandler = (e, id) => {
    let x = e.target.offsetLeft;

    setListIndex(id);
    setPosX(x);
  };

  return (
    <div className="tab-wrap">
      <h1 className="title">TAB</h1>
      <ul>
        <li className="slide" style={{ left: `${posX}px` }}></li>
        {TabList.map((list, index) => (
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

export default Tab;
