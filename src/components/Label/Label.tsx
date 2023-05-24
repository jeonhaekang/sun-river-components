import { LabelHTMLAttributes, forwardRef } from "react";
import * as Styled from "./Label.styles";
import { LabelProps } from "./Label.types";

export const Label = forwardRef<
  HTMLLabelElement,
  LabelProps & LabelHTMLAttributes<HTMLLabelElement>
>((props: LabelProps & LabelHTMLAttributes<HTMLLabelElement>) => {
  return <Styled.Label {...props} />;
});
