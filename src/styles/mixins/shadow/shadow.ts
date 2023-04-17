import { css } from "@emotion/react";
import { CSSProperties } from "react";
import { CSSSelectorOptions, setSelectorStyle } from "~/styles";

export const setBoxShadow = (
  defaultColor: CSSProperties["boxShadow"],
  selectorStyleOptions: CSSSelectorOptions<"boxShadow"> = {}
) => {
  return css`
    background-color: ${defaultColor};

    ${setSelectorStyle("boxShadow", selectorStyleOptions)};
  `;
};
