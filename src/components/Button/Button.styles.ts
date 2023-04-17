import { spinner } from "@components/Spinner";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  ColorsKey,
  flex,
  position,
  setBackgroundColor,
  setBorder,
  setColor,
  setSize,
  setTypography,
  theme
} from "~/styles";
import { buttonPaddingMap, buttonTypographyMap } from "./Button.constants";
import { ButtonPropsWithoutLabel } from "./Button.types";

const getBaseStyle = ({ size = "medium" }: ButtonPropsWithoutLabel) => {
  return css`
    position: relative;

    height: ${theme.size[size]}px;

    padding: 0 ${buttonPaddingMap[size]}px;

    ${setTypography(buttonTypographyMap[size])};

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

    ${setBorder({ width: 0, radius: 8 })}

    ${setColor(theme.colors.white)}

    box-shadow: ${theme.effect.shadow.drop2};
  `;
};

const getOutlineStyle = ({ color = "blue" }: ButtonPropsWithoutLabel) => {
  const { base, hover, active } = theme.palettes[color];

  return css`
    ${setBackgroundColor(theme.colors.white)}

    ${setBorder({ color: base, radius: 8 }, { hover, active })}

    ${setColor(base, { hover, active })}

    box-shadow: ${theme.effect.shadow.drop1};
  `;
};

const getTextStyle = ({ color = "blue" }: ButtonPropsWithoutLabel) => {
  const { base, hover, active } = theme.palettes[color];

  return css`
    ${setBackgroundColor("transparent")}

    ${setBorder({ width: 0, radius: 8 })}

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

export const ButtonSpinner = styled.span<ButtonPropsWithoutLabel>`
  ${setSize("100%", "100%")}

  ${position.absolute({ left: 0, top: 0 })}

  ${flex.center()}

  &::before {
    content: "";

    ${({ variant, color = "blue" }) => {
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
