import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { border, flex, setSelectorStyle, setTypography, theme } from "~/styles";
import {
  DEFAULT_SIZE,
  INPUT_RADIUS,
  PADDING_MAP,
  STATUS_COLOR_MAP,
  TYPOGRAPHY_MAP
} from "./Input.constants";
import { InputStyleProps } from "./Input.types";

const getSizeStyle = ({ _size = DEFAULT_SIZE }: InputStyleProps) => {
  return css`
    height: ${theme.size[_size]}px;
  `;
};

const getBaseInputStyle = ({
  _size = DEFAULT_SIZE,
  status,
  leftAddon,
  rightAddon
}: InputStyleProps) => {
  const { base, hover, focused } =
    theme.palettes[STATUS_COLOR_MAP[status || "default"]];

  const getRadius = () => {
    if (leftAddon && rightAddon) {
      return 0;
    }
    if (leftAddon) {
      return `0 ${INPUT_RADIUS}px ${INPUT_RADIUS}px 0`;
    }
    if (rightAddon) {
      return `${INPUT_RADIUS}px 0 0 ${INPUT_RADIUS}px`;
    }
    return INPUT_RADIUS;
  };

  return css`
    padding: 0 ${PADDING_MAP[_size]}px;

    ${border({ width: 1, radius: getRadius() })}
    ${setSelectorStyle("borderColor", {
      base: status && base,
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

  border-radius: ${INPUT_RADIUS}px 0 0 ${INPUT_RADIUS}px;
  border-right: none;
`;

export const RightAddon = styled.span`
  ${addonStyle}

  border-radius: 0 ${INPUT_RADIUS}px ${INPUT_RADIUS}px 0;
  border-left: none;
`;
