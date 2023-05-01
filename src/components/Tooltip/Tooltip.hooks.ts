import { useCallback, useEffect, useRef, useState } from "react";
import { splitCamelCase } from "../../utils/common/splitCamelCase";
import { TOOLTIP_DEFAULT, TOOLTIP_INIT_POSITION } from "./Tooltip.constants";
import { Position, TooltipProps } from "./Tooltip.types";

export const useTooltip = ({
  anchor = TOOLTIP_DEFAULT.anchor
}: TooltipProps) => {
  const [position, setPosition] = useState<Position>(TOOLTIP_INIT_POSITION);

  const anchorRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback(() => {
    const _anchorRef = anchorRef.current;
    const _targetRef = targetRef.current;

    if (!_anchorRef || !_targetRef) return;

    const { clientHeight: anchorHeight, clientWidth: anchorWidth } = _anchorRef;
    const { clientHeight: targetHeight, clientWidth: targetWidth } = _targetRef;

    const _position = { ...TOOLTIP_INIT_POSITION };

    const [direction, position] = splitCamelCase(anchor);

    switch (direction) {
      case "top":
        _position.top = (targetHeight + 10) * -1;
        break;
      case "left":
        _position.left = (targetWidth + 10) * -1;
        break;
      case "right":
        _position.right = (targetWidth + 10) * -1;
        break;
      case "bottom":
        _position.bottom = (targetHeight + 10) * -1;
        break;
    }

    switch (position) {
      case "Right":
        _position.right = 0;
        break;
      case "Left":
        _position.left = 0;
        break;
      case "Bottom":
        _position.bottom = 0;
        break;
      case "Top":
        _position.top = 0;
        break;
      case "Center":
        _position.left = anchorWidth / 2 - targetWidth / 2;
        break;
      case "Middle":
        _position.top = anchorHeight / 2 - targetHeight / 2;
        break;
    }

    setPosition(_position);
  }, [anchor]);

  useEffect(() => {
    updatePosition();
  }, [updatePosition]);

  return { position, anchorRef, targetRef };
};
