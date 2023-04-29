import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { position, setSelectorStyle, setSize, theme } from "../../styles";
import { CHECKBOX_DEFAULT, CHECKBOX_SIZE } from "./Checkbox.constants";
import { CheckboxProps } from "./Checkbox.types";

const resetStyle = css`
  appearance: none;
`;

const checkMarkBaseStyle = css`
  ${position.absolute({ left: 0, bottom: 5 })}

  background-color: ${theme.colors.white};

  border-radius: 3px;

  transform: translateX(8.5px) rotate(-45deg);
  transform-origin: left bottom;
`;

const checkMarkStyle = css`
  &::before {
    content: "";
    ${checkMarkBaseStyle}

    ${setSize(2.5, 6)}
  }

  &::after {
    content: "";
    ${checkMarkBaseStyle}

    ${setSize(10, 2.5)}
  }
`;

const lineMarkStyle = css`
  &::after {
    content: "";
    ${position.posCenter()}

    ${setSize(10, 2.5)}

    background-color: white;

    border-radius: 3px;
  }
`;

const getMark = (mark: CheckboxProps["mark"]) => {
  switch (mark) {
    case "line":
      return lineMarkStyle;
    default:
      return checkMarkStyle;
  }
};

const getBaseStyle = ({
  mark = CHECKBOX_DEFAULT.mark,
  color = CHECKBOX_DEFAULT.color
}: CheckboxProps) => {
  const { colors, effect, palettes } = theme;

  return css`
    position: relative;

    ${setSize(CHECKBOX_SIZE, CHECKBOX_SIZE)}

    ${setSelectorStyle("backgroundColor", {
      base: colors.white,
      checked: palettes[color].base
    })}

    ${setSelectorStyle("border", {
      base: `1px solid ${colors.gray2}`,
      checked: "none"
    })}
    border-radius:4px;

    ${setSelectorStyle("boxShadow", {
      base: effect.shadow.drop1,
      checked: effect.shadow.drop2
    })}

    &:checked {
      ${getMark(mark)}
    }

    &:not(:disabled) {
      cursor: pointer;
    }
  `;
};

export const CheckBox = styled.input<CheckboxProps>`
  ${resetStyle}

  ${props => getBaseStyle(props)}
`;
