import { PropsWithChildren } from "react";
import * as Styled from "./Typography.styles";
import { TypographyProps } from "./Typography.types";

export const Typography = ({
  children,
  ...props
}: PropsWithChildren<TypographyProps>) => {
  return <Styled.Typography {...props}>{children}</Styled.Typography>;
};
