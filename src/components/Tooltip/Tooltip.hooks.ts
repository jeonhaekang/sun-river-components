import { useCallback, useEffect, useRef, useState } from "react";
import {
  TOOLTIP_DEFAULT,
  TOOLTIP_EVENTS,
  TOOLTIP_GAP,
  TOOLTIP_INIT_POSITION
} from "./Tooltip.constants";
import { Position, ShiftPosition, TooltipProps } from "./Tooltip.types";

export const useTooltip = ({
  direction = TOOLTIP_DEFAULT.direction,
  anchor = TOOLTIP_DEFAULT.anchor
}: TooltipProps) => {
  const [position, setPosition] = useState<Position>(TOOLTIP_INIT_POSITION);
  const [shiftPosition, setShiftPosition] = useState<ShiftPosition>({ x: 0 });

  const anchorRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback(() => {
    if (!anchorRef.current || !targetRef.current) return;

    const anchorRect = anchorRef.current.getBoundingClientRect();
    const targetRect = targetRef.current.getBoundingClientRect();

    // position logic
    const _position = { ...TOOLTIP_INIT_POSITION };

    const isTopOver = anchorRect.top < targetRect.height + TOOLTIP_GAP;
    const isBottomOver =
      window.innerHeight - anchorRect.bottom < targetRect.height + TOOLTIP_GAP;

    let __position: keyof Position = "bottom";
    switch (direction) {
      case "top":
        __position = isTopOver && !isBottomOver ? "bottom" : "top";
        break;
      default:
        __position = !isTopOver && isBottomOver ? "top" : "bottom";
        break;
    }
    _position[__position] = (targetRect.height + TOOLTIP_GAP) * -1;

    switch (anchor) {
      case "right":
      case "left":
        _position[anchor] = 0;
        break;
      default:
        _position.left = anchorRect.width / 2 - targetRect.width / 2;
    }
    setPosition(_position);

    // shiftPosition logic
    let x = 0;
    const limitPos = targetRect.width - anchorRect.width;
    switch (anchor) {
      case "right": {
        const overLeftPos = anchorRect.right - targetRect.width;

        if (overLeftPos < 0) {
          x = Math.min(limitPos, overLeftPos * -1);
        }
        break;
      }
      case "left": {
        const overRightPos =
          window.innerWidth - anchorRect.left - targetRect.width;

        if (overRightPos < 0) {
          x = Math.max(limitPos * -1, overRightPos);
        }
        break;
      }
      default: {
        const targetOverWidth = targetRect.width / 2 - anchorRect.width / 2;

        const overLeftPos = anchorRect.left - targetOverWidth;
        const overRightPos =
          window.innerWidth - anchorRect.right - targetOverWidth;

        if (overLeftPos < 0) {
          x = Math.min(limitPos / 2, overLeftPos * -1);
        } else if (overRightPos < 0) {
          x = Math.max((limitPos / 2) * -1, overRightPos);
        }
        break;
      }
    }

    setShiftPosition({ x });
  }, [anchor, direction]);

  useEffect(() => {
    updatePosition();

    TOOLTIP_EVENTS.forEach(event => {
      window.addEventListener(event, updatePosition);
    });

    return () => {
      TOOLTIP_EVENTS.forEach(event => {
        window.removeEventListener(event, updatePosition);
      });
    };
  }, [updatePosition]);

  return { position, shiftPosition, anchorRef, targetRef };
};
