import { Position } from "./Tooltip.types";

export const TOOLTIP_EVENTS = ["scroll", "resize"] as const;

export const TOOLTIP_GAP = 10;

export const TOOLTIP_BLACK_FONT_COLOR = ["white", "gray1", "gray2"];

export const TOOLTIP_DIRECTION = ["top", "bottom"] as const;

export const TOOLTIP_ANCHOR = ["left", "right", "center"] as const;

export const TOOLTIP_DEFAULT = {
  color: "black",
  direction: "bottom",
  anchor: "center"
} as const;

export const TOOLTIP_INIT_POSITION: Position = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
