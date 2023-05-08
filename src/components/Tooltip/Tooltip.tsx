import { cloneElement } from "react";
import { useAutoPosition } from "../../hooks";
import { PropsWithElement } from "../../utils";
import { Portal } from "../Portal";
import { TOOLTIP_DEFAULT } from "./Tooltip.constants";
import { useTooltip } from "./Tooltip.hooks";
import * as Styled from "./Tooltip.styles";
import { TooltipProps } from "./Tooltip.types";

export const Tooltip = ({
  children,
  color = TOOLTIP_DEFAULT.color,
  direction = TOOLTIP_DEFAULT.direction,
  anchor = TOOLTIP_DEFAULT.anchor,
  label
}: PropsWithElement<TooltipProps>) => {
  const app = useTooltip();

  const { position, shiftPosition, anchorRef, targetRef } = useAutoPosition({
    direction,
    anchor,
    trigger: app.isActive
  });

  const styleProps = {
    color,
    position,
    shiftPosition
  };

  const _children = cloneElement(children, { ref: anchorRef, ...app.events });

  return (
    <>
      {_children}

      {app.isActive && (
        <Portal container={document.body}>
          <Styled.Tooltip {...styleProps} ref={targetRef}>
            {label}
          </Styled.Tooltip>
        </Portal>
      )}
    </>
  );
};
