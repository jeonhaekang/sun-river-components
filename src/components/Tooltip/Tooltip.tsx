import { cloneElement } from "react";
import { PropsWithElement } from "../../utils";
import { Portal } from "../Portal";
import { useTooltip } from "./Tooltip.hooks";
import * as Styled from "./Tooltip.styles";
import { TooltipProps } from "./Tooltip.types";

export const Tooltip = ({
  children,
  color,
  label,
  ...props
}: PropsWithElement<TooltipProps>) => {
  const app = useTooltip(props);

  const styleProps = {
    color,
    ...app.position
  };

  const _children = cloneElement(children, {
    ref: app.position.anchorRef,
    ...app.events
  });

  return (
    <>
      {_children}

      {app.isActive && (
        <Portal container={document.body}>
          <Styled.Tooltip {...styleProps} ref={app.position.targetRef}>
            {label}
          </Styled.Tooltip>
        </Portal>
      )}
    </>
  );
};
