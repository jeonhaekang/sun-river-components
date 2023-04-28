import { useEffect } from "react";

export const useBodyScrollLock = (trigger: boolean) => {
  useEffect(() => {
    const _overflow = getComputedStyle(document.body).overflow;

    if (trigger) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = _overflow;
    };
  }, [trigger]);
};
