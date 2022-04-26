import React, { useState } from "react";

const Dropdown = () => {
  const [text, setText] = useState("");
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState("All");
  const selectList = [
    { id: 1, title: "hello" },
    { id: 2, title: "front-end" },
    { id: 3, title: "developer" },
    { id: 4, title: "web" },
    { id: 5, title: "back-end" },
    { id: 6, title: "node.js" },
    { id: 7, title: "vue" },
  ];
  const changeHandler = (e) => {
    let value = e.target.value;
    setText(value);
  };
  const changeSelect = (e, id) => {
    setTitle(selectList[id - 1].title);
    setActive(false);
  };
  const selectBoxHandler = (e) => {
    e.stopPropagation();
    setActive(!active);
  };

  const menuList = () => {
    return selectList
      .filter((value) => {
        if (text === "") {
          return value.title;
        } else if (
          value.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())
        ) {
          return value.title;
        }
      })
      .map((data) => {
        return (
          <li onClick={(e) => changeSelect(e, data.id)} key={data.title}>
            {data.title}
          </li>
        );
      });
  };

  return (
    <div className="dropdown-wrap">
      <h1 className="title">Drop down</h1>
      <div className="dropdown">
        <div className="select-box" onClick={selectBoxHandler}>
          {title}
        </div>
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
