import { Position } from "./Tooltip.types";

export const TOOLTIP_COLOR_MAP = {
  white: {
    backgroundColor: "white",
    fontColor: "black"
  },
  black: {
    backgroundColor: "black",
    fontColor: "white"
  }
} as const;

// export const TOOLTIP_DIRECTION = ["top", "right", "bottom", "left"] as const;

// export const TOOLTIP_ANCHOR = ["start", "center", "end"] as const;
export const TOOLTIP_ANCHOR = [
  "topLeft",
  "topCenter",
  "topRight",
  "rightTop",
  "rightMiddle",
  "rightBottom",
  "bottomLeft",
  "bottomCenter",
  "bottomRight",
  "leftTop",
  "leftMiddle",
  "leftBottom"
] as const;

export const TOOLTIP_DEFAULT = {
  color: "black",
  anchor: "bottomCenter"
} as const;

export const TOOLTIP_INIT_POSITION: Position = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
