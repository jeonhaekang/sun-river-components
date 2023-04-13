export const spinnerWidth = ["thin", "normal", "bold"] as const;

export const spinnerSpeed = ["slow", "normal", "fast"] as const;

export const spinnerWidthMap = {
  bold: 3,
  normal: 2,
  thin: 1
} as const;

export const spinnerSpeedMap = {
  fast: 400,
  normal: 700,
  slow: 1000
} as const;
