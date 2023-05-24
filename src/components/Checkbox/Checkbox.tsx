import { InputHTMLAttributes, forwardRef } from "react";
import * as Styled from "./Checkbox.styles";
import { CheckboxProps } from "./Checkbox.types";

export const Checkbox = forwardRef<
  HTMLLabelElement,
  CheckboxProps & Omit<InputHTMLAttributes<HTMLInputElement>, "type">
>(({ children, ...props }, ref) => {
  return (
    <Styled.CheckBoxLabel ref={ref}>
      <Styled.CheckBox type="checkbox" {...props} />
      {children}
    </Styled.CheckBoxLabel>
  );
});
