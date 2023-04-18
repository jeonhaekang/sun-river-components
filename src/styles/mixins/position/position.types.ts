import type { CSSProperties } from "react";

export interface PositionProps {
  position?: CSSProperties["position"];
  top?: CSSProperties["top"];
  right?: CSSProperties["right"];
  bottom?: CSSProperties["bottom"];
  left?: CSSProperties["left"];
  inset?: CSSProperties["inset"];
}

export type PositionType = Extract<
  CSSProperties["position"],
  "fixed" | "absolute"
>;
