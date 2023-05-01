import { useCallback, useEffect, useRef, useState } from "react";
import { TOOLTIP_DEFAULT, TOOLTIP_INIT_POSITION } from "./Tooltip.constants";
import { FixPosition, Position, TooltipProps } from "./Tooltip.types";

const EVENTS = ["scroll", "resize"] as const;

export const useTooltip = ({
  direction = TOOLTIP_DEFAULT.direction,
  anchor = TOOLTIP_DEFAULT.anchor
}: TooltipProps) => {
  const [position, setPosition] = useState<Position>(TOOLTIP_INIT_POSITION);
  const [translate, setTranslate] = useState<FixPosition>({ x: 0 });

  const anchorRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback(() => {
    if (!anchorRef.current || !targetRef.current) return;

    const anchorRect = anchorRef.current.getBoundingClientRect();
    const targetRect = targetRef.current.getBoundingClientRect();

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

    setPosition(prev => {
      if (JSON.stringify(prev) !== JSON.stringify(_position)) {
        return _position;
      }
      return prev;
    });
  }, [anchor, direction]);

  const updateTranslate = useCallback(() => {
    if (!anchorRef.current || !targetRef.current) return;

    const anchorRect = anchorRef.current.getBoundingClientRect();
    const targetRect = targetRef.current.getBoundingClientRect();

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

    setTranslate({ x });
  }, [anchor]);

  const update = useCallback(() => {
    updatePosition();
    updateTranslate();
  }, [updatePosition, updateTranslate]);

  useEffect(() => {
    update();

    EVENTS.forEach(event => {
      window.addEventListener(event, update);
    });

    return () => {
      EVENTS.forEach(event => {
        window.removeEventListener(event, update);
      });
    };
  }, [update]);

  return { position, translate, anchorRef, targetRef };
};