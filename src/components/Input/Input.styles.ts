import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { border, flex, setSelectorStyle, setTypography, theme } from "~/styles";
import {
  INPUT_RADIUS,
  PADDING_MAP,
  STATUS_COLOR_MAP,
  TYPOGRAPHY_MAP
} from "./Input.constants";
import { InputStyleProps } from "./Input.types";

const getSizeStyle = ({ _size = "medium" }: InputStyleProps) => {
  return css`
    height: ${theme.size[_size]}px;
  `;
};

const getBaseInputStyle = ({
  _size = "medium",
  status = "default",
  leftAddon,
  rightAddon
}: InputStyleProps) => {
  const { base, hover, focused } = theme.palettes[STATUS_COLOR_MAP[status]];

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
    ${setSelectorStyle("borderColor", { hover, focus: base })}
    outline: none;

    ${setSelectorStyle("boxShadow", {
      focus: focused
    })}

    ${setTypography(TYPOGRAPHY_MAP[_size])}
  `;
};

export const Input = styled.input<InputStyleProps>`
  ${props => getSizeStyle(props)}

  ${props => getBaseInputStyle(props)}
`;

export const InputContainer = styled.div<InputStyleProps>`
  ${props => getSizeStyle(props)}

  display: flex;
`;

const addonStyle = css`
  ${flex.center()}

  height: 100%;

  padding: 0 11px;

  background-color: ${theme.colors.gray1};

  ${border()}
`;

export const LeftAddon = styled.div<InputStyleProps>`
  ${addonStyle}

  border-radius: ${INPUT_RADIUS}px 0 0 ${INPUT_RADIUS}px;
  border-right: none;
`;

export const RightAddon = styled.span`
  ${addonStyle}

  border-radius: 0 ${INPUT_RADIUS}px ${INPUT_RADIUS}px 0;
  border-left: none;
`;
