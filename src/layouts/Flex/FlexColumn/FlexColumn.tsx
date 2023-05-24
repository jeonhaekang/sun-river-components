import { PropsWithChildren, forwardRef } from "react";
import { FlexColumnProps } from "../../../styles";
import { WithAs } from "../Flex.types";
import * as Styled from "./FlexColumn.styles";

export const FlexColumn = forwardRef<
  HTMLDivElement,
  WithAs<FlexColumnProps> & PropsWithChildren
>(
  ({
    display = "flex",
    align = "normal",
    justify = "normal",
    gap,
    ...props
  }) => {
    const styleProps = {
      display,
      align,
      justify,
      gap
    };

    const mergedProps = {
      ...styleProps,
      ...props
    };

    return <Styled.FlexColumn {...mergedProps} />;
  }
);
