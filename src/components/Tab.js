import React, { useState } from "react";

const Tab = () => {
  // 탭메뉴 리스트
  const TabList = [
    { id: 0, title: "감자" },
    { id: 1, title: "고구마" },
    { id: 2, title: "카레라이스" },
  ];
  // 탭메뉴 순서값 저장
  const [listIndex, setListIndex] = useState(0);
  // 탭메뉴 x좌표값 저장
  const [posX, setPosX] = useState(0);
  // 탭메뉴 클릭 이벤트
  const clickHandler = (e, id) => {
    // 클릭한 탭메뉴 x좌표 값
    let x = e.target.offsetLeft;
    // 클릭한 메뉴 id값을 받아와 state 저장
    setListIndex(id);
    // 클릭한 메뉴 x좌표값 state 저장
    setPosX(x);
  };

  return (
    <div className="tab-wrap">
      {/* title */}
      <h1 className="title">TAB</h1>
      {/* tab menu */}
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
