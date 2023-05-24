import { RefObject, useEffect, useRef } from "react";

const defaultEvents = ["mousedown", "touchstart"];

export const useClickAway = (
  ref: RefObject<HTMLElement>,
  callback: (e: Event) => void,
  events = defaultEvents
) => {
  const _callback = useRef(callback);

  useEffect(() => {
    _callback.current = callback;
  }, [callback]);

  useEffect(() => {
    const onClickAway = (e: Event) => {
      e.stopPropagation();

      if (ref.current && !ref.current.contains(e.target as Node)) {
        _callback.current(e);
      }
    };

    events.forEach(event => document.addEventListener(event, onClickAway));

    return () => {
      events.forEach(event => document.removeEventListener(event, onClickAway));
    };
  }, [events, ref]);
};
