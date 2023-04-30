import { InputHTMLAttributes } from "react";
import * as Styled from "./Radio.styles";
import { RadioProps } from "./Radio.types";

export const Radio = ({
  children,
  ...props
}: RadioProps & Omit<InputHTMLAttributes<HTMLInputElement>, "type">) => {
  return (
    <Styled.RadioLabel>
      <Styled.Radio type="radio" {...props} />
      {children}
    </Styled.RadioLabel>
  );
};
