import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { position, setTypography, theme } from "../../styles";
import { TOOLTIP_BLACK_FONT_COLOR, TOOLTIP_DEFAULT } from "./Tooltip.constants";
import { TooltipStyleProps } from "./Tooltip.types";

export const TooltipContainer = styled.div`
  position: relative;
`;

const getTooltipBaseStyle = ({
  color = TOOLTIP_DEFAULT.color,
  position: _position,
  shiftPosition
}: TooltipStyleProps) => {
  const { colors, effect } = theme;

  return css`
    ${position.fixed(_position)}

    max-width: 200px;

    padding: 4px 8px;

    border-radius: 4px;

    background-color: ${colors[color]};

    box-shadow: ${effect.shadow.drop3};

    ${setTypography("paragraph3")}
    color: ${TOOLTIP_BLACK_FONT_COLOR.includes(color) ? "black" : "white"};

    transform: translate3d(${shiftPosition.x}px, 0, 0);
  `;
};

export const Tooltip = styled.div<TooltipStyleProps>`
  ${props => getTooltipBaseStyle(props)}
`;
