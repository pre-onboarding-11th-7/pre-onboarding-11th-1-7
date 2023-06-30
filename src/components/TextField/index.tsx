import { InputHTMLAttributes, forwardRef } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  testid?: "email-input" | "password-input" | "new-todo-input" | "modify-input";
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, testid, ...inputAttrs }, ref) => {
    const textField = (
      <div>
        <input data-testid={testid} type="text" ref={ref} {...inputAttrs} />
      </div>
    );

    if (!label) {
      return textField;
    }

    return (
      <div>
        {!!label && <label>{label}</label>}
        {textField}
      </div>
    );
  }
);

export default TextField;
