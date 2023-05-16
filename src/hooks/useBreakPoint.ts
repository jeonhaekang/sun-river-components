/* eslint-disable no-restricted-syntax */
import { useCallback, useEffect, useState } from "react";

export interface BreakPoints {
  [key: string | number]: number;
}

export const useBreakPoint = (breakPoints: BreakPoints) => {
  const [size, setSize] = useState<string | number>();

  const onResize = useCallback(() => {
    const { innerWidth } = window;

    for (const [name, breakPoint] of Object.entries(breakPoints)) {
      if (innerWidth < breakPoint) {
        setSize(name);
        break;
      }
    }
  }, [breakPoints]);

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize]);

  return size;
};
