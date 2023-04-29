import { InputHTMLAttributes } from "react";
import * as Styled from "./Radio.styles";
import { RadioProps } from "./Radio.types";

export const Radio = (
  props: RadioProps & Omit<InputHTMLAttributes<HTMLInputElement>, "type">
) => {
  return <Styled.Radio type="radio" {...props} />;
};
