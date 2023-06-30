import React from "react";
import { useNavigate } from "react-router-dom";
import { path } from "../Router";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>pre-onboarding-11th-1-7</h1>
      <button onClick={() => navigate(path.SIGNIN)}>로그인</button>
      <button onClick={() => navigate(path.SIGNUP)}>회원가입</button>
    </div>
  );
};

export default HomePage;
