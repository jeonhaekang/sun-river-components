import { SerializedStyles, css } from "@emotion/react";
import { unitToPx } from "../common";
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
      ${width && unitToPx("width", width)}
      ${height && unitToPx("height", height)}
      ${minWidth && unitToPx("minWidth", minWidth)}
      ${minHeight && unitToPx("minHeight", minHeight)}
      ${maxWidth && unitToPx("maxWidth", maxWidth)}
      ${maxHeight && unitToPx("maxHeight", maxHeight)}
    `;
  }

  return css`
    ${unitToPx("width", arg1)}
    ${unitToPx("height", arg2)}
  `;
}
