import { InputHTMLAttributes } from "react";
import * as Styled from "./Checkbox.styles";
import { CheckboxProps } from "./Checkbox.types";

export const Checkbox = ({
  children,
  ...props
}: CheckboxProps & Omit<InputHTMLAttributes<HTMLInputElement>, "type">) => {
  return (
    <Styled.CheckBoxLabel>
      <Styled.CheckBox type="checkbox" {...props} />
      {children}
    </Styled.CheckBoxLabel>
  );
};
