import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { path } from "../../Router";

const AuthGuardLayout = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("auth");

  useEffect(() => {
    if (!token) {
      alert("토큰이 존재하지 않습니다.");
      navigate(path.SIGNIN);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  return <Outlet />;
};

export default AuthGuardLayout;
