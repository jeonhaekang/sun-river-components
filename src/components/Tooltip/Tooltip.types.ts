import { ColorsKey } from "../../styles";
import { OneOf, Position, Translate } from "../../utils";
import { TOOLTIP_ANCHOR, TOOLTIP_DIRECTION } from "./Tooltip.constants";

export interface TooltipProps {
  color?: ColorsKey;
  direction?: OneOf<typeof TOOLTIP_DIRECTION>;
  anchor?: OneOf<typeof TOOLTIP_ANCHOR>;
  label: string;
}

export interface TooltipStyleProps extends Pick<TooltipProps, "color"> {
  position: Position;
  shiftPosition: Translate;
}
