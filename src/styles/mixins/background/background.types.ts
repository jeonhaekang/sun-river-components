import { CSSProperties } from "react";

export type BackgroundColor = CSSProperties["backgroundColor"];

export type BackgroundColorOptions = {
  [CSSSelector in Styles.CSSSelector]?: BackgroundColor;
};
