import { OneOf } from "../../utils";
import { TOOLTIP_ANCHOR, TOOLTIP_DIRECTION } from "./Tooltip.constants";

export interface Position {
  top?: number | "auto";
  right?: number | "auto";
  bottom?: number | "auto";
  left?: number | "auto";
  x?: number;
}

export interface FixPosition {
  x?: number;
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

export interface TooltipStyleProps extends TooltipProps {
  position: Position;
  fixPosition: FixPosition;
}
