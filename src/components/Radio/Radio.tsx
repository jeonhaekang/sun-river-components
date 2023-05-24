import { InputHTMLAttributes, forwardRef } from "react";
import * as Styled from "./Radio.styles";
import { RadioProps } from "./Radio.types";

export const Radio = forwardRef<
  HTMLLabelElement,
  RadioProps & Omit<InputHTMLAttributes<HTMLInputElement>, "type">
>(({ children, ...props }, ref) => {
  return (
    <Styled.RadioLabel ref={ref}>
      <Styled.Radio type="radio" {...props} />
      {children}
    </Styled.RadioLabel>
  );
});
