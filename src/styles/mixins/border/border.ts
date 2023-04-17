import { css } from "@emotion/react";
import {
  CSSSelectorOptions,
  cssHelper,
  setSelectorStyle,
  theme
} from "~/styles";
import { SetBorderProps } from "./border.types";

export const setBorder = (
  options: SetBorderProps,
  selectorStyleOptions: CSSSelectorOptions<"borderColor"> = {}
) => {
  const {
    width = 1,
    color = theme.colors.black,
    style = "solid",
    radius,
    direction
  } = options;
  const border = `${width}px ${style} ${color}`;

  return css`
    ${direction ? `border-${direction}: ${border};` : `border: ${border};`}
    ${radius && cssHelper("borderRadius", radius)}

    ${setSelectorStyle("borderColor", selectorStyleOptions)}
  `;
};
