import { ReactElement } from "react";

export type ValueOf<T> = T[keyof T];

export type OneOf<T extends readonly unknown[]> = T[number];

export type PropsWithElement<T> = T & { children: ReactElement };
