import { FlexProps } from "~/styles";
import { WithAs } from "../Flex.types";
import * as Styled from "./Flex.styles";

export const Flex = ({
  display = "flex",
  direction = "row",
  align = "normal",
  justify = "normal",
  gap,
  ...props
}: WithAs<FlexProps>) => {
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

  return <Styled.Flex {...mergedProps} />;
};
