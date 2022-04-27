import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Input = () => {
  // 이메일 체크
  const [check, setCheck] = useState(false);
  // 패스워드 텍스트 보기
  const [view, setView] = useState(false);
  // input password type 저장
  const [password, setPassword] = useState("password");

  // 이메일 체크 change 이벤트
  const emailCheck = (e) => {
    // 이메일 정규표현식 유효성 검사
    let exp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // input value 변수
    let value = e.target.value;
    // 이메일 체크 state에 true/false값 저장
    setCheck(exp.test(value));
  };
  // 패스워드 view 클릭이벤트
  const clickHandler = () => {
    // view 버튼 toggle
    setView(!view);
    // 패스워드 타입 조건 저장
    setPassword(password === "password" ? "text" : "password");
  };
  return (
    <div className="input-wrap">
      {/* title */}
      <h1 className="title">INPUT</h1>
      <form>
        {/* email */}
        <div className="email-wrap">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={emailCheck}
          />
          {/* email 체크 아이콘 */}
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
          {/* 패스워드 view 아이콘 */}
          <span
            className={view ? "icon active" : "icon"}
            onClick={clickHandler}
          >
            {view ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Input;
