import { CSSProperties } from "react";

export interface BorderProps {
  width?: CSSProperties["borderWidth"];
  color?: CSSProperties["borderColor"];
  style?: CSSProperties["borderStyle"];
  radius?: CSSProperties["borderRadius"];
  direction?: "top" | "bottom" | "left" | "right";
}
