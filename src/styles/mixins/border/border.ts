import { css } from "@emotion/react";
import { theme } from "~/styles";
import { BorderColorOptions, SetBorderProps } from "./border.types";

export const setBorder = (
  options: SetBorderProps,
  colorOptions: BorderColorOptions = {}
) => {
  const {
    width = "1px",
    color = theme.colors.black,
    style = "solid",
    radius,
    direction
  } = options;

  const { hover, active, disabled, enabled } = colorOptions;

  const border = `${width} ${style} ${color}`;

  return css`
    ${direction ? `border-${direction}: ${border};` : `border: ${border};`}
    border-radius: ${radius};

    &:hover {
      ${hover && `border-color: ${hover}`}
    }

    &:active {
      ${active && `border-color: ${active}`}
    }

    &:disabled {
      ${disabled && `border-color: ${disabled}`}
    }

    &:enabled {
      ${enabled && `border-color: ${enabled}`}
    }
  `;
};
