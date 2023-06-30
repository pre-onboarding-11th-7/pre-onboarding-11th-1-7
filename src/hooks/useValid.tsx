//병합 후 Types 파일 생기면 임포트 해서 사용

interface User {
  email: string;
  password: string;
}

import { useEffect, useState } from "react";

export const useValid = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [valid, setValid] = useState({
    email: false,
    password: false,
    disabled: true,
  });

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });

    if (name === "email") {
      if (value.includes("@")) {
        setValid({ ...valid, email: true });
      } else {
        setValid({ ...valid, email: false });
      }
    }
    if (name === "password") {
      if (value.length >= 8) {
        setValid({ ...valid, password: true });
      } else {
        setValid({ ...valid, password: false });
      }
    }
  };

  useEffect(() => {
    if (valid.email && valid.password) {
      setValid({ ...valid, disabled: false });
    } else {
      setValid({ ...valid, disabled: true });
    }
  }, [userInfo]);

  return { onChangeHandler, userInfo, valid };
};
