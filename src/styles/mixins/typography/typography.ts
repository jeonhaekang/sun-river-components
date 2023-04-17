import { css } from "@emotion/react";
import { fontSize, fontWeight, lineHeight } from "./typography.constants";

export const setTypography = (typography: keyof typeof fontSize) => {
  return css`
    font-size: ${fontSize[typography]}px;
    font-weight: ${fontWeight[typography]}px;
    line-height: ${lineHeight[typography]}px;
  `;
};
