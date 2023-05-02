import { useAutoPosition } from "../../hooks";
import { PropsWithElement } from "../../utils";
import { TOOLTIP_DEFAULT } from "./Tooltip.constants";
import * as Styled from "./Tooltip.styles";
import { TooltipProps } from "./Tooltip.types";

export const Tooltip = ({
  children,
  direction = TOOLTIP_DEFAULT.direction,
  anchor = TOOLTIP_DEFAULT.anchor,
  ...props
}: PropsWithElement<TooltipProps>) => {
  const { position, shiftPosition, anchorRef, targetRef } = useAutoPosition({
    direction,
    anchor
  });

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
        tooltip
      </Styled.Tooltip>
    </Styled.TooltipContainer>
  );
};
