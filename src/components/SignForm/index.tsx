import { FormHTMLAttributes, FormEvent } from "react";
import { useValid } from "../../hooks/useValid";
import { User } from "user";
import TextField from "../TextField";
import Button from "../Button";
import { useLocation } from "react-router-dom";

interface SignFormProps extends FormHTMLAttributes<HTMLFormElement> {
  onComplete: ({ email, password }: User) => void;
}

const SignForm = ({ onComplete, ...formAttrs }: SignFormProps) => {
  const location = useLocation();
  const { onChangeHandler, userInfo, valid } = useValid();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onComplete({ ...userInfo });
  };

  return (
    <form method="post" onSubmit={handleSubmit} {...formAttrs}>
      <TextField
        label="Email"
        name="email"
        type="email"
        onChange={onChangeHandler}
        value={userInfo.email}
        testid="email-input"
        placeholder="@를 포함하여 입력해주세요."
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        onChange={onChangeHandler}
        value={userInfo.password}
        testid="password-input"
        placeholder="8자 이상 입력해주세요."
      />
      <Button
        label={location.pathname.includes("signin") ? "로그인" : "회원가입"}
        type="submit"
        testid={
          location.pathname.includes("signin")
            ? "signin-button"
            : "signup-button"
        }
        disabled={valid.disabled}
      />
    </form>
  );
};

export default SignForm;
