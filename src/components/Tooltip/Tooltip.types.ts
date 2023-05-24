import { ReactNode } from "react";
import { ColorsKey } from "../../styles";
import { OneOf, Position, Translate } from "../../utils";
import {
  TOOLTIP_ANCHOR,
  TOOLTIP_DIRECTION,
  TOOLTIP_TRIGGER
} from "./Tooltip.constants";

export interface TooltipProps {
  /**
   * @default hover
   */
  trigger?: OneOf<typeof TOOLTIP_TRIGGER>;
  /**
   * @default black
   */
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
   * @default 10
   */
  gap?: number;
  label: ReactNode;
}

export interface TooltipStyleProps extends Pick<TooltipProps, "color"> {
  position: Position;
  shiftPosition: Translate;
}
