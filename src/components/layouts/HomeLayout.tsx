import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { path } from "../../Router";

const HomeLayout = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate(path.TODO);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  return <Outlet />;
};

export default HomeLayout;
