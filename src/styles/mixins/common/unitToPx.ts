import { CSSProperties } from "react";
import { toKebabCase } from "~/utils";

export const unitToPx = (
  property: keyof CSSProperties,
  value: CSSProperties[typeof property]
) => {
  return `${toKebabCase(property)}: ${
    typeof value === "number" ? `${value}px` : value
  };`;
};
