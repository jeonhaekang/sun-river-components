import { CSSProperties, ReactElement } from "react";

export type ValueOf<T> = T[keyof T];

export type OneOf<T extends readonly unknown[]> = T[number];

export type PropsWithElement<T> = T & { children: ReactElement };

export interface Position {
  top?: CSSProperties["top"];
  right?: CSSProperties["right"];
  bottom?: CSSProperties["bottom"];
  left?: CSSProperties["left"];
}

export interface Translate {
  x?: number;
  y?: number;
}
