import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  setBackgroundColor,
  setBorder,
  setColor,
  setTypography,
  theme
} from "~/styles";
import { ButtonPropsWithoutLabel } from "./Button.types";

const typographyMap = {
  large: "heading4",
  medium: "heading5",
  small: "heading6"
} as const;

const paddingMap = {
  large: 16,
  medium: 12,
  small: 8
} as const;

const getBaseStyle = ({ size = "medium" }: ButtonPropsWithoutLabel) => {
  return css`
    height: ${theme.size[size]}px;

    padding: 0 ${paddingMap[size]}px;

    ${setTypography(typographyMap[size])};

    &:disabled {
      opacity: ${theme.opacity.disabled};
    }

    &:not(:disabled) {
      cursor: pointer;
    }
  `;
};

const getDefaultStyle = ({ color = "blue" }: ButtonPropsWithoutLabel) => {
  const { base, hover, active } = theme.palettes[color];

  return css`
    ${setBackgroundColor(base, { hover, active })}

    ${setBorder({ width: 0, radius: "8px" })}

    ${setColor(theme.colors.white)}

    box-shadow: ${theme.effect.shadow.drop2};
  `;
};

const getOutlineStyle = ({ color = "blue" }: ButtonPropsWithoutLabel) => {
  const { base, hover, active } = theme.palettes[color];

  return css`
    ${setBackgroundColor(theme.colors.white)}

    ${setBorder({ color: base, radius: "8px" }, { hover, active })}

    ${setColor(base, { hover, active })}

    box-shadow: ${theme.effect.shadow.drop1};
  `;
};

const getTextStyle = ({ color = "blue" }: ButtonPropsWithoutLabel) => {
  const { base, hover, active } = theme.palettes[color];

  return css`
    ${setBackgroundColor("transparent")}

    ${setBorder({ width: 0 })}

    ${setColor(base, { hover, active })}
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
