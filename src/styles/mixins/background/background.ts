import { css } from "@emotion/react";
import { BackgroundColor, BackgroundColorOptions } from "./background.types";

export const setBackgroundColor = (
  defaultColor: BackgroundColor,
  options: BackgroundColorOptions = {}
) => {
  const { hover, active, disabled, enabled } = options;

  return css`
    background-color: ${defaultColor};

    &:hover {
      ${hover && `background-color: ${hover}`}
    }

    &:active {
      ${active && `background-color: ${active}`}
    }

    &:disabled {
      ${disabled && `background-color: ${disabled}`}
    }

    &:enabled {
      ${enabled && `background-color: ${enabled}`}
    }
  `;
};
