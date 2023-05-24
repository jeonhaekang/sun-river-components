/* eslint-disable consistent-return */
import { useCallback, useEffect, useRef, useState } from "react";
import { Position, Translate } from "../utils";

const INIT_POSITION: Position = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
} as const;

const INIT_TRANSLATE: Translate = {
  x: 0,
  y: 0
};

export const useAutoPosition = ({
  direction,
  anchor,
  trigger,
  gap = 10
}: {
  direction: "top" | "bottom";
  anchor: "left" | "center" | "right";
  trigger: boolean;
  gap?: number;
}) => {
  const [position, setPosition] = useState(INIT_POSITION);
  const [shiftPosition, setShiftPosition] = useState(INIT_TRANSLATE);

  const anchorRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback(() => {
    if (!anchorRef.current || !targetRef.current) return;

    const anchorRect = anchorRef.current.getBoundingClientRect();
    const targetRect = targetRef.current.getBoundingClientRect();

    // position logic
    const _position = { ...INIT_POSITION };

    const isTopOver = anchorRect.top < targetRect.height + gap;
    const isBottomOver =
      window.innerHeight - anchorRect.bottom < targetRect.height + gap;

    let _direction = "bottom";
    switch (direction) {
      case "top":
        _direction = isTopOver && !isBottomOver ? "bottom" : "top";
        break;
      default:
        _direction = !isTopOver && isBottomOver ? "top" : "bottom";
        break;
    }

    switch (_direction) {
      case "top":
        _position.top = anchorRect.top - targetRect.height - gap;
        break;
      default:
        _position.top = anchorRect.bottom + gap;
    }

    switch (anchor) {
      case "right":
        _position.left = anchorRect.right - targetRect.width;
        break;
      case "left":
        _position.left = anchorRect.left;
        break;
      default:
        _position.left =
          anchorRect.left + anchorRect.width / 2 - targetRect.width / 2;
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
  }, [anchor, direction, gap]);

  useEffect(() => {
    if (trigger) {
      updatePosition();

      const events = ["resize", "scroll"];

      events.forEach(event => {
        window.addEventListener(event, updatePosition);
      });

      return () => {
        events.forEach(event => {
          window.removeEventListener(event, updatePosition);
        });
      };
    }
  }, [trigger, updatePosition]);

  return { position, shiftPosition, anchorRef, targetRef };
};
