import { useMemo, useState } from "react";

export const useTooltip = () => {
  const [isActive, setIsActive] = useState(false);

  const events = useMemo(
    () => ({
      onMouseEnter: () => setIsActive(true),
      onMouseLeave: () => setIsActive(false)
    }),
    []
  );

  return { isActive, events };
};
