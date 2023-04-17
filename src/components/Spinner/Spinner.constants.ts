export const WIDTH = ["thin", "normal", "bold"] as const;

export const SPEED = ["slow", "normal", "fast"] as const;

export const WIDTH_MAP = {
  bold: 3,
  normal: 2,
  thin: 1
} as const;

export const SPEED_MAP = {
  fast: 400,
  normal: 700,
  slow: 1000
} as const;

export const DEFAULT = {
  width: "normal",
  color: "blue",
  speed: "normal",
  size: "medium"
} as const;
