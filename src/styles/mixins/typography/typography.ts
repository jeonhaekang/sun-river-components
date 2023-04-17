import { css } from "@emotion/react";
import { CSSSelectorOptions, setSelectorStyle } from "../common";
import { fontSize, fontWeight, lineHeight } from "./typography.constants";

export const setTypography = (typography: keyof typeof fontSize) => {
  return css`
    font-size: ${fontSize[typography]}px;
    font-weight: ${fontWeight[typography]}px;
    line-height: ${lineHeight[typography]}px;
  `;
};

export const setColor = (
  defaultColor: string,
  selectorStyleOptions: CSSSelectorOptions<"color"> = {}
) => {
  return css`
    color: ${defaultColor};

    ${setSelectorStyle("color", selectorStyleOptions)}
  `;
};
