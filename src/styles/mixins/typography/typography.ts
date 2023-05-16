import { css } from "@emotion/react";
import { fontSize, fontWeight, lineHeight } from "./typography.constants";

export const setTypography = (typography: keyof typeof fontSize) => {
  return css`
    font-size: ${fontSize[typography] / 16}rem;
    font-weight: ${fontWeight[typography]};
    line-height: ${lineHeight[typography] / 16}rem;
  `;
};
