import { useRef, useState } from "react";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { ButtonTestIdEnum, TextFieldTestIdEnum } from "../../enum";
import { Link } from "react-router-dom";

const Signup = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  // ToDo : 유효성 검사 로직
  const [valid, setValid] = useState(false);

  const handleSubmit = () => {
    setValid(false);
  };
  return (
    // TODO : 토큰 유무 검사 레이아웃
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          ref={emailRef}
          testId={TextFieldTestIdEnum.email}
          placeholder="@를 포함하여 입력해주세요."
        />
        <TextField
          label="Password"
          type="password"
          ref={passwordRef}
          testId={TextFieldTestIdEnum.password}
          placeholder="8자 이상 입력해주세요."
        />
        <Button
          label="로그인"
          type="submit"
          testId={ButtonTestIdEnum.signin}
          disabled={!valid}
        />
      </form>
      <Link to={"/signin"} replace>
        Sign Up
      </Link>
    </div>
  );
};

export default Signup;
