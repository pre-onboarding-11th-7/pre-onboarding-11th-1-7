import React from "react";
import { ReactNode, FormHTMLAttributes, FormEvent } from "react";
import TextField from "../TextFeild";
import { useValid } from "../../hooks/useValid";

//병합 후 Types 파일 생기면 임포트 해서 사용
interface User {
  email: string;
  password: string;
}

interface SignFormProps extends FormHTMLAttributes<HTMLFormElement> {
  onComplete: ({ email, password }: User) => void;
  children: ReactNode;
}

const SignForm = ({ onComplete, children, ...formAttrs }: SignFormProps) => {
  const { onChangeHandler, userInfo, valid } = useValid();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onComplete({ ...userInfo });
  };

  return (
    <form method="post" onSubmit={handleSubmit} {...formAttrs}>
      <TextField
        data-testid="email-input"
        name="email"
        label="이메일"
        placeholder="@을 포함한 이메일을 입력해주세요."
        value={userInfo.email}
        onChange={onChangeHandler}
      />
      <TextField
        data-testid="password-input"
        type="password"
        name="password"
        label="비밀번호"
        placeholder="8자 이상의 비밀번호를 입력해주세요."
        value={userInfo.password}
        onChange={onChangeHandler}
      />
      <button
        type="submit"
        data-testid="signin-button"
        disabled={valid.disabled}>
        완료
      </button>
    </form>
  );
};

export default SignForm;
