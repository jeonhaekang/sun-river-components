import { PropsWithChildren, forwardRef } from "react";
import { FlexProps } from "../../../styles";
import { WithAs } from "../Flex.types";
import * as Styled from "./Flex.styles";

export const Flex = forwardRef<
  HTMLDivElement,
  WithAs<FlexProps> & PropsWithChildren
>(
  (
    {
      display = "flex",
      direction = "row",
      align = "normal",
      justify = "normal",
      gap,
      ...props
    },
    ref
  ) => {
    const styleProps = {
      display,
      direction,
      align,
      justify,
      gap
    };

    const mergedProps = {
      ...styleProps,
      ...props
    };

    return <Styled.Flex ref={ref} {...mergedProps} />;
  }
);
