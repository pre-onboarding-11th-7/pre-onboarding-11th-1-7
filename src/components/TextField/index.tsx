import { InputHTMLAttributes, forwardRef } from "react";
import { TextFieldTestIdEnum } from "../../enum";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  testId?: TextFieldTestIdEnum;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, testId, ...inputAttrs }, ref) => {
    const textField = (
      <div>
        <input data-testid={testId} type="text" ref={ref} {...inputAttrs} />
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
