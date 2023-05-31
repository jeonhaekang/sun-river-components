import { useEffect } from "react";

export const useBodyScrollLock = (trigger: boolean) => {
  useEffect(() => {
    if (trigger) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [trigger]);
};
