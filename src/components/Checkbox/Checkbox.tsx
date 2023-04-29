import { InputHTMLAttributes } from "react";
import * as Styled from "./Checkbox.styles";
import { CheckboxProps } from "./Checkbox.types";

export const Checkbox = (
  props: CheckboxProps & Omit<InputHTMLAttributes<HTMLInputElement>, "type">
) => {
  return <Styled.CheckBox type="checkbox" {...props} />;
};
