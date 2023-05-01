import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { position, setTypography, theme } from "../../styles";
import { TOOLTIP_COLOR_MAP } from "./Tooltip.constants";
import { TooltipStyleProps } from "./Tooltip.types";

export const TooltipContainer = styled.div`
  position: relative;

  display: inline-flex;
`;

const getTooltipBaseStyle = ({
  color = "black",
  position: _position,
  fixPosition
}: TooltipStyleProps) => {
  const { effect } = theme;
  const { backgroundColor, fontColor } = TOOLTIP_COLOR_MAP[color];

  return css`
    display: inline-flex;

    ${position.absolute(_position)}

    transform: translate3d(${fixPosition.x}px, 0, 0);

    width: 100px;

    padding: 4px 8px;

    border-radius: 4px;

    background-color: ${backgroundColor};

    box-shadow: ${effect.shadow.drop3};

    ${setTypography("paragraph3")}
    color: ${fontColor};
  `;
};

export const Tooltip = styled.div<TooltipStyleProps>`
  ${props => getTooltipBaseStyle(props)}
`;
