import React, { useState } from "react";

const Dropdown = () => {
  // dropdown input 텍스트 value 값
  const [text, setText] = useState("");
  // 셀렉트 박스 클릭 값 저장
  const [active, setActive] = useState(false);
  // 셀렉트 박스 타이틀 텍스트 저장
  const [title, setTitle] = useState("All");
  // dropdown 메뉴 리스트
  const selectList = [
    { id: 1, title: "hello" },
    { id: 2, title: "front-end" },
    { id: 3, title: "developer" },
    { id: 4, title: "web" },
    { id: 5, title: "back-end" },
    { id: 6, title: "node.js" },
    { id: 7, title: "vue" },
  ];
  // dropdown 메뉴 검색 input change 이벤트
  const changeHandler = (e) => {
    // input value
    let value = e.target.value;
    // value값 state 저장
    setText(value);
  };
  // dropdown 메뉴리스트 클릭시 셀렉트 박스 타이틀 변경 및 dropdown 메뉴 비활성화
  const changeSelect = (e, id) => {
    setTitle(selectList[id - 1].title);
    setActive(false);
  };
  // 셀렉트 박스 클릭시 dropdown 메뉴 토글
  const selectBoxHandler = (e) => {
    e.stopPropagation();
    setActive(!active);
  };
  // 메뉴리스트 출력
  const menuList = () => {
    return (
      selectList
        .filter((value) => {
          if (text === "") {
            // text state 빈문자열일때 모든 dropdown 메뉴 리스트 출력
            return value.title;
          } else if (
            // input value 값으로 받아온 문자열 확인
            value.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())
          ) {
            return value.title;
          }
        })
        // 해당 조건을 통한 리스트 출력
        .map((data) => {
          return (
            <li onClick={(e) => changeSelect(e, data.id)} key={data.title}>
              {data.title}
            </li>
          );
        })
    );
  };

  return (
    <div className="dropdown-wrap">
      {/* title */}
      <h1 className="title">Drop down</h1>
      <div className="dropdown">
        {/* select box */}
        <div className="select-box" onClick={selectBoxHandler}>
          {title}
        </div>
        {/* dropdown menu */}
        <ul className={active ? "inner-select active" : "inner-select"}>
          <li>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="search"
              onChange={changeHandler}
            />
          </li>
          {menuList()}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
