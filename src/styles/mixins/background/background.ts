import { css } from "@emotion/react";
import { CSSProperties } from "react";
import { CSSSelectorOptions, getSelectorStyle } from "~/styles";

export const setBackgroundColor = (
  defaultColor: CSSProperties["backgroundColor"],
  selectorStyleOptions: CSSSelectorOptions<"backgroundColor"> = {}
) => {
  return css`
    background-color: ${defaultColor};

    ${getSelectorStyle("backgroundColor", selectorStyleOptions)};
  `;
};
