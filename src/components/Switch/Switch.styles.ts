import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { position, setSize, theme } from "../../styles";
import { SWITCH_DEFAULT, SWITCH_WIDTH } from "./Switch.constants";
import { SwitchProps } from "./Switch.types";

const getBaseStyle = ({ color = SWITCH_DEFAULT.color }: SwitchProps) => {
  const { colors, palettes, effect } = theme;

  return css`
    position: relative;

    ${setSize(SWITCH_WIDTH, 20)}
    box-sizing: border-box;

    border-radius: ${SWITCH_WIDTH / 2}px;

    background-color: ${colors.gray2};

    transition: 300ms;

    appearance: none;

    &:disabled {
      opacity: ${theme.opacity.disabled};
    }

    &:not(:disabled) {
      cursor: pointer;
    }

    &::before {
      content: "";

      ${position.absolute({ top: 3, left: 3 })}

      ${setSize(14, 14)}

      border-radius: 7px;

      background-color: ${colors.white};

      box-shadow: ${effect.shadow.drop3};

      transition: 300ms;
    }

    &:checked {
      background-color: ${palettes[color].base};

      &::before {
        transform: translateX(${SWITCH_WIDTH / 2}px);
      }
    }
  `;
};

export const CheckBox = styled.input<SwitchProps>`
  ${props => getBaseStyle(props)}
`;
