export const TOOLTIP_TRIGGER = ["hover", "click"] as const;

export const TOOLTIP_BLACK_FONT_COLOR = ["white", "gray1", "gray2"];

export const TOOLTIP_DIRECTION = ["top", "bottom"] as const;

export const TOOLTIP_ANCHOR = ["left", "right", "center"] as const;

export const TOOLTIP_DEFAULT = {
  color: "black",
  direction: "bottom",
  anchor: "center",
  trigger: "hover"
} as const;
