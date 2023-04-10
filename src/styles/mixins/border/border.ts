import { css } from "@emotion/react";
import { CSSSelectorOptions, getSelectorStyle, theme } from "~/styles";
import { SetBorderProps } from "./border.types";

export const setBorder = (
  options: SetBorderProps,
  selectorStyleOptions: CSSSelectorOptions<"borderColor"> = {}
) => {
  const {
    width = "1px",
    color = theme.colors.black,
    style = "solid",
    radius,
    direction
  } = options;
  const border = `${width} ${style} ${color}`;

  return css`
    ${direction ? `border-${direction}: ${border};` : `border: ${border};`}
    border-radius: ${radius};

    ${getSelectorStyle("borderColor", selectorStyleOptions)}
  `;
};
