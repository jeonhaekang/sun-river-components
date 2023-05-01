import { useRef, useState } from "react";

export const useAutoPosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const anchorRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  return [position, anchorRef, targetRef] as const;
};
