import { CSSProperties } from "react";

export interface SetBorderProps {
  width?: CSSProperties["borderWidth"];
  color?: CSSProperties["borderColor"];
  radius?: CSSProperties["borderRadius"];
  style?: CSSProperties["borderStyle"];
  direction?: "top" | "bottom" | "left" | "right";
}

export type BorderColorOptions = {
  [CSSSelector in Styles.CSSSelector]?: CSSProperties["borderColor"];
};
