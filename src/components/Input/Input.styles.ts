import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { border, flex, setSelectorStyle, setTypography, theme } from "~/styles";
import {
  DEFAULT,
  PADDING_MAP,
  RADIUS,
  STATUS_COLOR_MAP,
  TYPOGRAPHY_MAP
} from "./Input.constants";
import { InputStyleProps } from "./Input.types";

const getSizeStyle = ({ _size = DEFAULT.size }: InputStyleProps) => {
  return css`
    height: ${theme.size[_size]}px;
  `;
};

const getBaseInputStyle = ({
  _size = DEFAULT.size,
  status = DEFAULT.status,
  leftAddon,
  rightAddon
}: InputStyleProps) => {
  const { base, hover, focused } = theme.palettes[STATUS_COLOR_MAP[status]];

  const getRadius = () => {
    if (leftAddon && rightAddon) return 0;

    if (leftAddon) return `0 ${RADIUS}px ${RADIUS}px 0`;

    if (rightAddon) return `${RADIUS}px 0 0 ${RADIUS}px`;

    return RADIUS;
  };

  return css`
    margin: 0;
    padding: 0 ${PADDING_MAP[_size]}px;

    ${border({ width: 1, radius: getRadius() })}
    ${setSelectorStyle("borderColor", {
      base: status === "none" ? theme.colors.gray2 : base,
      hover,
      focus: base
    })}
    outline: none;

    ${setSelectorStyle("boxShadow", {
      focus: focused
    })}

    ${setTypography(TYPOGRAPHY_MAP[_size])}

    &::placeholder {
      color: ${theme.colors.gray3};
    }

    &:disabled {
      background-color: ${theme.colors.white};

      ${!(leftAddon || rightAddon) &&
      `opacity: ${theme.effect.opacity.disabled};`}
    }
  `;
};

export const Input = styled.input<InputStyleProps>`
  ${props => getSizeStyle(props)}

  ${props => getBaseInputStyle(props)}
`;

export const InputContainer = styled.div<InputStyleProps>`
  ${props => getSizeStyle(props)}

  display: flex;

  ${({ disabled }) => disabled && `opacity: ${theme.effect.opacity.disabled};`}
`;

const addonStyle = css`
  ${flex.center()}

  height: 100%;

  padding: 0 12px;

  background-color: ${theme.colors.gray1};

  ${border()}
`;

export const LeftAddon = styled.span`
  ${addonStyle}

  border-radius: ${RADIUS}px 0 0 ${RADIUS}px;
  border-right: none;
`;

export const RightAddon = styled.span`
  ${addonStyle}

  border-radius: 0 ${RADIUS}px ${RADIUS}px 0;
  border-left: none;
`;
