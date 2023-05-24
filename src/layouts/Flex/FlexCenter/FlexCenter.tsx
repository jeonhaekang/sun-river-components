import { PropsWithChildren, forwardRef } from "react";
import { FlexCenterProps } from "../../../styles";
import { WithAs } from "../Flex.types";
import * as Styled from "./FlexCenter.styles";

export const FlexCenter = forwardRef<
  HTMLDivElement,
  WithAs<FlexCenterProps> & PropsWithChildren
>(({ display = "flex", direction = "row", gap, ...props }, ref) => {
  const styleProps = {
    display,
    direction,
    gap
  };

  const mergedProps = {
    ...styleProps,
    ...props
  };

  return <Styled.FlexCenter ref={ref} {...mergedProps} />;
});
