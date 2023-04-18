import { FlexColumnProps } from "~/styles";
import { WithAs } from "../Flex.types";
import * as Styled from "./FlexColumn.styles";

export const FlexColumn = ({
  display = "flex",
  align = "normal",
  justify = "normal",
  gap,
  ...props
}: WithAs<FlexColumnProps>) => {
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
};
