import { CSSProperties } from "react";
import { utils } from "~/utils";

export const unitToPx = (
  property: keyof CSSProperties,
  value: CSSProperties[typeof property]
) => {
  return `${utils.common.toKebabCase(property)}: ${
    typeof value === "number" ? `${value}px` : value
  };`;
};
