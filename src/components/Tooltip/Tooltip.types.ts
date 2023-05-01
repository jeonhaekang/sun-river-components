import { OneOf } from "../../utils";
import { TOOLTIP_ANCHOR, TOOLTIP_DIRECTION } from "./Tooltip.constants";

export interface Position {
  top?: number | "auto";
  right?: number | "auto";
  bottom?: number | "auto";
  left?: number | "auto";
}

export interface TooltipProps {
  color?: "white" | "black";
  /**
   * @default bottom
   */
  direction?: OneOf<typeof TOOLTIP_DIRECTION>;
  /**
   * @default center
   */
  anchor?: OneOf<typeof TOOLTIP_ANCHOR>;
}
