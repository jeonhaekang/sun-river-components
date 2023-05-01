import { OneOf } from "../../utils";
import { TOOLTIP_ANCHOR } from "./Tooltip.constants";

export interface Position {
  top?: number | "auto";
  right?: number | "auto";
  bottom?: number | "auto";
  left?: number | "auto";

  // x: number;
  // y: number;
}

export interface TooltipProps {
  color?: "white" | "black";
  /**
   * @default center
   */
  anchor?: OneOf<typeof TOOLTIP_ANCHOR>;
}
