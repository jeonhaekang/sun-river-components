import { PropsWithElement } from "../../utils";
import { useTooltip } from "./Tooltip.hooks";
import * as Styled from "./Tooltip.styles";
import { TooltipProps } from "./Tooltip.types";

export const Tooltip = ({
  children,
  ...props
}: PropsWithElement<TooltipProps>) => {
  const { position, anchorRef, targetRef } = useTooltip(props);

  return (
    <Styled.TooltipContainer ref={anchorRef}>
      {children}

      <Styled.Tooltip {...props} {...position} ref={targetRef}>
        tooltipdddddddtooldddddtooltipdddddddtooldddddtooltipdddddddtooldddddto
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Styled.Tooltip>
    </Styled.TooltipContainer>
  );
};
