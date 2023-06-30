import { InputHTMLAttributes, forwardRef } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, ...inputAttrs }, ref) => {
    const textField = (
      <div>
        <input type="text" ref={ref} {...inputAttrs} />
      </div>
    );

    if (!label) {
      return textField;
    }

    return (
      <div>
        {!!label && <p>{label}</p>}
        {textField}
      </div>
    );
  }
);

export default TextField;
