import { theme } from "../../styles";

export const DEFAULT = {
  unit: "pixel",
  width: 100,
  height: 100,
  bgColor: theme.colors.gray2
} as const;

export const COMMON_UNIT_MAP = {
  pixel: "px",
  percent: "%"
} as const;

export const WIDTH_UNIT_MAP = {
  ...COMMON_UNIT_MAP,
  viewport: "vw"
};

export const HEIGHT_UNIT_MAP = {
  ...COMMON_UNIT_MAP,
  viewport: "vh"
};

export const UNIT = ["pixel", "percent", "viewport"] as const;
