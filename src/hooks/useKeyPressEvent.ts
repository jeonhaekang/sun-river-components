import { useEffect, useRef } from "react";

export const useKeyPressEvent = (
  key: string,
  onKeydown: (e: KeyboardEvent) => void
) => {
  const _onKeydown = useRef(onKeydown);

  useEffect(() => {
    _onKeydown.current = onKeydown;
  }, [onKeydown]);

  useEffect(() => {
    const callback = (e: KeyboardEvent) => {
      if (e.key === key) {
        _onKeydown.current(e);
      }
    };

    window.addEventListener("keydown", callback);

    return () => {
      window.removeEventListener("keydown", callback);
    };
  }, [key, onKeydown]);
};
