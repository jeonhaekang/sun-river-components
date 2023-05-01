import { PropsWithElement } from "../../utils";
import { useTooltip } from "./Tooltip.hooks";
import * as Styled from "./Tooltip.styles";
import { TooltipProps } from "./Tooltip.types";

export const Tooltip = ({
  children,
  ...props
}: PropsWithElement<TooltipProps>) => {
  const { position, shiftPosition, anchorRef, targetRef } = useTooltip(props);

  const styleProps = {
    position,
    shiftPosition
  };

  const mergedProps = {
    ...props,
    ...styleProps
  };

  return (
    <Styled.TooltipContainer ref={anchorRef}>
      {children}

      <Styled.Tooltip {...mergedProps} ref={targetRef}>
        위 코드에서는 newX와 maxX 값을 사용하여
      </Styled.Tooltip>
    </Styled.TooltipContainer>
  );
};
