import { css } from "@emotion/react";
import { CSSSelectorOptions, getSelectorStyle } from "~/styles";
import { BackgroundColor } from "./background.types";

export const setBackgroundColor = (
  defaultColor: BackgroundColor,
  selectorStyleOptions: CSSSelectorOptions<"backgroundColor"> = {}
) => {
  return css`
    background-color: ${defaultColor};

    ${getSelectorStyle("backgroundColor", selectorStyleOptions)};
  `;
};
