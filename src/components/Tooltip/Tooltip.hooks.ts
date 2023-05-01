import { useCallback, useEffect, useRef, useState } from "react";
import { TOOLTIP_DEFAULT, TOOLTIP_INIT_POSITION } from "./Tooltip.constants";
import { Position, TooltipProps } from "./Tooltip.types";

export const useTooltip = ({
  direction = TOOLTIP_DEFAULT.direction,
  anchor = TOOLTIP_DEFAULT.anchor
}: TooltipProps) => {
  const [position, setPosition] = useState<Position>(TOOLTIP_INIT_POSITION);

  const anchorRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback(() => {
    const _anchorRef = anchorRef.current;
    const _targetRef = targetRef.current;

    if (!_anchorRef || !_targetRef) return;

    const anchorRect = _anchorRef.getBoundingClientRect();
    const targetRect = _targetRef.getBoundingClientRect();

    const _position = { ...TOOLTIP_INIT_POSITION };

    const isTopOver = anchorRect.top < targetRect.height;

    const isBottomOver =
      window.innerHeight - anchorRect.bottom < targetRect.height;

    let __position: keyof Position = "top";
    switch (direction) {
      case "top":
        __position = isTopOver && !isBottomOver ? "bottom" : "top";
        break;
      default:
        __position = !isTopOver && isBottomOver ? "top" : "bottom";
        break;
    }
    _position[__position] = targetRect.height * -1;

    switch (anchor) {
      case "right":
      case "left":
        _position[anchor] = 0;
        break;
      default:
        _position.left = anchorRect.width / 2 - targetRect.width / 2;
    }

    setPosition(_position);
  }, [anchor, direction]);

  useEffect(() => {
    updatePosition();

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [updatePosition]);

  return { position, anchorRef, targetRef };
};
