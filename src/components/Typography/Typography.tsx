import { PropsWithChildren, forwardRef } from "react";
import * as Styled from "./Typography.styles";
import { TypographyProps } from "./Typography.types";

export const Typography = forwardRef<
  HTMLSpanElement,
  PropsWithChildren<TypographyProps>
>(({ children, ...props }, ref) => {
  return (
    <Styled.Typography ref={ref} {...props}>
      {children}
    </Styled.Typography>
  );
});
