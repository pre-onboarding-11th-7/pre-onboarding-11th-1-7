import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  testid?:
    | "signup-button"
    | "signin-button"
    | "new-todo-add-button"
    | "modify-button"
    | "delete-button"
    | "submit-button"
    | "cancel-button";
}

const Button = ({
  label,
  type = "button",
  testid,
  ...btnAttrs
}: ButtonProps) => {
  return (
    <button type={type} data-testid={testid} {...btnAttrs}>
      {label}
    </button>
  );
};

export default Button;
