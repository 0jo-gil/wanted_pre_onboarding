import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Input = () => {
  const [check, setCheck] = useState(false);
  const [view, setView] = useState(false);
  const [password, setPassword] = useState("password");

  const emailCheck = (e) => {
    let exp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    let value = e.target.value;
    setCheck(exp.test(value));
  };

  const clickHandler = () => {
    setView(!view);
    setPassword(password === "password" ? "text" : "password");
  };
  return (
    <div className="input-wrap">
      <h1 className="title">INPUT</h1>
      <div className="email-wrap">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={emailCheck}
        />
        <span className={check ? "icon active" : "icon"}>
          <BsCheckCircleFill />
        </span>
      </div>
      <div className="password-wrap">
        <label htmlFor="password">Password</label>
        <input
          type={password}
          name="password"
          id="password"
          placeholder="Password"
        />
        <button
          className={view ? "icon active" : "icon"}
          onClick={clickHandler}
        >
          {view ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </button>
      </div>
    </div>
  );
};

export default Input;
