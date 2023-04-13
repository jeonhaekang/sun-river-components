import { CSSProperties } from "react";

export interface FlexProps {
  display?: "flex" | "inline-flex";
  direction?: CSSProperties["flexDirection"];
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  gap?: CSSProperties["gap"];
}
