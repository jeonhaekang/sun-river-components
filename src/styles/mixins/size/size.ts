import { SerializedStyles, css } from "@emotion/react";
import { cssHelper } from "../common";
import { SetSize } from "./size.types";

export function setSize(
  width: SetSize["width"],
  height: SetSize["height"]
): SerializedStyles;

export function setSize(props: SetSize): SerializedStyles;

export function setSize(
  arg1: SetSize["width"] | SetSize,
  arg2?: SetSize["height"]
) {
  if (typeof arg1 === "object") {
    const { width, height, minWidth, minHeight, maxWidth, maxHeight } = arg1;

    return css`
      ${width && cssHelper("width", width)}
      ${height && cssHelper("height", height)}
      ${minWidth && cssHelper("minWidth", minWidth)}
      ${minHeight && cssHelper("minHeight", minHeight)}
      ${maxWidth && cssHelper("maxWidth", maxWidth)}
      ${maxHeight && cssHelper("maxHeight", maxHeight)}
    `;
  }

  return css`
    ${cssHelper("width", arg1)}
    ${cssHelper("height", arg2)}
  `;
}
