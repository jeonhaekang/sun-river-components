import { PropsWithChildren } from "react";
import { FlexCenterProps } from "~/styles";
import { WithAs } from "../Flex.types";
import * as Styled from "./FlexCenter.styles";

export const FlexCenter = ({
  display = "flex",
  direction = "row",
  gap,
  ...props
}: WithAs<FlexCenterProps> & PropsWithChildren) => {
  const styleProps = {
    display,
    direction,
    gap
  };

  const mergedProps = {
    ...styleProps,
    ...props
  };

  return <Styled.FlexCenter {...mergedProps} />;
};
