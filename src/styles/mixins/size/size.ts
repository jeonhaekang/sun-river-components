import { SerializedStyles, css } from "@emotion/react";
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
      ${width && `width: ${width}px;`}
      ${height && `height: ${height}px;`}
      ${minWidth && `minWidth: ${minWidth}px;`}
      ${minHeight && `minHeight: ${minHeight}px;`}
      ${maxWidth && `maxWidth: ${maxWidth}px;`}
      ${maxHeight && `maxHeight: ${maxHeight}px;`}
    `;
  }

  return css`
    width: ${arg1}px;
    height: ${arg2}px;
  `;
}
