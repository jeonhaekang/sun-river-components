import { useMemo, useState } from "react";

export const useTooltip = () => {
  const [isActive, setIsActive] = useState(false);

  const event = useMemo(
    () => ({
      onMouseEnter: () => setIsActive(true),
      onMouseLeave: () => setIsActive(false)
    }),
    []
  );

  return { isActive, event };
};
