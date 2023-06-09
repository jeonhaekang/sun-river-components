import { css } from "@emotion/react";
import styled from "@emotion/styled";

import {
  ColorsKey,
  border,
  flex,
  position,
  setSelectorStyle,
  setSize,
  setTypography,
  theme
} from "../../styles";
import { spinner } from "../Spinner";
import {
  DEFAULT,
  PADDING_MAP,
  RADIUS,
  TYPOGRAPHY_MAP
} from "./Button.constants";
import { ButtonPropsWithoutLabel } from "./Button.types";

const getBaseStyle = ({ size = DEFAULT.size }: ButtonPropsWithoutLabel) => {
  return css`
    position: relative;

    height: ${theme.size[size]}px;

    padding: 0 ${PADDING_MAP[size]}px;

    border: none;

    ${setTypography(TYPOGRAPHY_MAP[size])};

    &:disabled {
      opacity: ${theme.opacity.disabled};
    }

    &:not(:disabled) {
      cursor: pointer;
    }
  `;
};

const getDefaultStyle = ({
  color = DEFAULT.color
}: ButtonPropsWithoutLabel) => {
  const { base, hover, active } = theme.palettes[color];

  return css`
    ${setSelectorStyle("backgroundColor", { base, hover, active })}

    ${border({ width: 0, radius: RADIUS })}

    color: ${theme.colors.white};

    box-shadow: ${theme.effect.shadow.drop2};
  `;
};

const getOutlineStyle = ({
  color = DEFAULT.color
}: ButtonPropsWithoutLabel) => {
  const { base, hover, active } = theme.palettes[color];

  return css`
    background-color: ${theme.colors.white};

    ${border({ width: 1, radius: RADIUS })}
    ${setSelectorStyle("borderColor", { base, hover, active })}

    ${setSelectorStyle("color", { base, hover, active })}

    box-shadow: ${theme.effect.shadow.drop1};
  `;
};

const getTextStyle = ({ color = DEFAULT.color }: ButtonPropsWithoutLabel) => {
  const { base, hover, active } = theme.palettes[color];

  return css`
    background-color: transparent;

    ${border({ width: 0, radius: RADIUS })}

    ${setSelectorStyle("color", { base, hover, active })}
  `;
};

export const Button = styled.button<ButtonPropsWithoutLabel>`
  ${props => getBaseStyle(props)};

  ${props => {
    switch (props.variant) {
      case "outline":
        return getOutlineStyle(props);
      case "text":
        return getTextStyle(props);
      default:
        return getDefaultStyle(props);
    }
  }}
`;

export const ButtonSpinner = styled.span<ButtonPropsWithoutLabel>`
  ${setSize("100%", "100%")}

  ${position.absolute({ left: 0, top: 0 })}

  ${flex.center()}

  &::before {
    content: "";

    ${({ variant, color = DEFAULT.color }) => {
      let spinnerColor: ColorsKey;

      switch (variant) {
        case "outline":
        case "text":
          spinnerColor = color;
          break;
        default:
          spinnerColor = "white";
      }

      return spinner({ color: spinnerColor });
    }}
  }
`;
