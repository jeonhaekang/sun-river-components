import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { flex, position, setSelectorStyle, setSize, theme } from "../../styles";
import { Label } from "../Label";
import { RADIO_DEFAULT } from "./Radio.constants";
import { RadioProps } from "./Radio.types";

const resetStyle = css`
  margin: 0;
  appearance: none;
`;

const getBaseStyle = ({ color = RADIO_DEFAULT.color }: RadioProps) => {
  const { colors, palettes, effect } = theme;

  return css`
    position: relative;

    ${setSize(20, 20)}

    ${setSelectorStyle("border", {
      base: `1px solid ${colors.gray2}`,
      checked: "none"
    })}
    border-radius: 100%;

    ${setSelectorStyle("backgroundColor", {
      base: colors.white,
      checked: palettes[color].base
    })}

    ${setSelectorStyle("boxShadow", {
      base: effect.shadow.drop1,
      checked: effect.shadow.drop2
    })}

    &:checked::after {
      content: "";

      ${position.posCenter()}

      ${setSize(8, 8)}

      background-color: ${colors.white};

      border-radius: 100%;
    }

    &:not(:disabled) {
      cursor: pointer;
    }
  `;
};

export const Radio = styled.input<RadioProps>`
  ${resetStyle}

  ${props => getBaseStyle(props)}
`;

export const RadioLabel = styled(Label)`
  ${flex({ display: "inline-flex", gap: 8 })}
`;
