import { useMemo, useState } from "react";
import { useAutoPosition } from "../../hooks";
import { TOOLTIP_DEFAULT } from "./Tooltip.constants";
import { TooltipProps } from "./Tooltip.types";

export const useTooltip = ({
  trigger = TOOLTIP_DEFAULT.trigger,
  direction = TOOLTIP_DEFAULT.direction,
  anchor = TOOLTIP_DEFAULT.anchor,
  gap
}: Omit<TooltipProps, "label">) => {
  const [isActive, setIsActive] = useState(false);

  const position = useAutoPosition({
    direction,
    anchor,
    trigger: isActive,
    gap
  });

  const hoverEvents = useMemo(
    () => ({
      onMouseEnter: () => setIsActive(true),
      onMouseLeave: () => setIsActive(false)
    }),
    []
  );

  const clickEvents = useMemo(
    () => ({
      onClick: () => setIsActive(prev => !prev)
    }),
    []
  );

  const events = useMemo(() => {
    switch (trigger) {
      case "click":
        return clickEvents;
      default:
        return hoverEvents;
    }
  }, [clickEvents, hoverEvents, trigger]);

  return { isActive, events, position };
};
