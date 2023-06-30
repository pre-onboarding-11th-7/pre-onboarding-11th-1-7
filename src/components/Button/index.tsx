import { type ButtonHTMLAttributes } from "react";
import { ButtonTestIdEnum } from "../../enum";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  testId?: ButtonTestIdEnum;
}

const Button = ({ label, type = "button", ...btnAttrs }: ButtonProps) => {
  return (
    <button type={type} {...btnAttrs}>
      {label}
    </button>
  );
};

export default Button;
