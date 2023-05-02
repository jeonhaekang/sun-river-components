import { ColorsKey } from "../../styles";
import { OneOf, Position, Translate } from "../../utils";
import {
  TOOLTIP_ANCHOR,
  TOOLTIP_DIRECTION,
  TOOLTIP_TRIGGER
} from "./Tooltip.constants";

export interface TooltipProps {
  color?: ColorsKey;
  /**
   * @default bottom
   */
  direction?: OneOf<typeof TOOLTIP_DIRECTION>;
  /**
   * @default center
   */
  anchor?: OneOf<typeof TOOLTIP_ANCHOR>;
  /**
   * @default hover
   */
  trigger?: OneOf<typeof TOOLTIP_TRIGGER>;
}

export interface TooltipStyleProps extends TooltipProps {
  position: Position;
  shiftPosition: Translate;
}
