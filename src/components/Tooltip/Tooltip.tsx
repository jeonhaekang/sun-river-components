import { useAutoPosition } from "../../hooks";
import { PropsWithElement } from "../../utils";
import { TOOLTIP_DEFAULT } from "./Tooltip.constants";
import { useTooltip } from "./Tooltip.hooks";
import * as Styled from "./Tooltip.styles";
import { TooltipProps } from "./Tooltip.types";

export const Tooltip = ({
  children,
  direction = TOOLTIP_DEFAULT.direction,
  anchor = TOOLTIP_DEFAULT.anchor,
  ...props
}: PropsWithElement<TooltipProps>) => {
  const app = useTooltip();

  const { position, shiftPosition, anchorRef, targetRef } = useAutoPosition({
    direction,
    anchor,
    trigger: app.isActive
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
    <Styled.TooltipContainer ref={anchorRef} {...app.event}>
      {children}

      {app.isActive && (
        <Styled.Tooltip {...mergedProps} ref={targetRef}>
          tooltip
        </Styled.Tooltip>
      )}
    </Styled.TooltipContainer>
  );
};
