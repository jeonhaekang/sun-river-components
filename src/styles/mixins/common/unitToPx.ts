import { CSSProperties } from "react";
import { utils, ValueOf } from "~/utils";

export const unitToPx = (value: ValueOf<CSSProperties>) => {
  return typeof value === "number" ? `${value}px` : value;
};

export const cssHelper = (
  property: keyof CSSProperties,
  value: CSSProperties[typeof property]
) => {
  return `${utils.common.toKebabCase(property)}: ${unitToPx(value)};`;
};
