import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { border, setSelectorStyle, setTypography, theme } from "../../styles";
import { STATUS_COLOR_MAP } from "../Input";
import { TEXTAREA_DEFAULT } from "./TextArea.constants";
import { TextAreaProps } from "./TextArea.types";

const resetStyle = css`
  outline: none;
  font: inherit;
`;

const smallStyle = css`
  padding: 4px 8px;

  ${setTypography("paragraph3")}
`;

const mediumStyle = css`
  padding: 8px 12px;

  ${setTypography("paragraph2")}
`;

const largeStyle = css`
  padding: 10px 16px;

  ${setTypography("paragraph1")}
`;

const getSizeStyle = (size: TextAreaProps["size"]) => {
  switch (size) {
    case "large":
      return largeStyle;
    case "small":
      return smallStyle;
    default:
      return mediumStyle;
  }
};

const getBaseStyle = ({
  status = TEXTAREA_DEFAULT.status,
  size = TEXTAREA_DEFAULT.size,
  resize = TEXTAREA_DEFAULT.resize
}: TextAreaProps) => {
  const { colors, palettes, effect } = theme;
  const { base, hover, focused } = palettes[STATUS_COLOR_MAP[status]];

  return css`
    ${getSizeStyle(size)}

    background-color: ${colors.white};

    ${border({ radius: 8 })}
    ${setSelectorStyle("borderColor", {
      base: status === "none" ? "auto" : base,
      hover,
      focus: base
    })}

    ${setSelectorStyle("boxShadow", { focus: focused })}

    resize: ${resize};

    &:disabled {
      opacity: ${effect.opacity.disabled};
    }
  `;
};

export const TextArea = styled.textarea<TextAreaProps>`
  ${resetStyle}

  ${props => getBaseStyle(props)}
`;
