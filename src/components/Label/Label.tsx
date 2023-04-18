import { LabelHTMLAttributes } from "react";
import * as Styled from "./Label.styles";
import { LabelProps } from "./Label.types";

export const Label = ({
  children,
  ...props
}: LabelProps & LabelHTMLAttributes<HTMLLabelElement>) => {
  return <Styled.Label {...props}>{children}</Styled.Label>;
};
