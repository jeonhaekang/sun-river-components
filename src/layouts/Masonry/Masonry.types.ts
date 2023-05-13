import { ReactElement } from "react";
import { Translate } from "../../utils";

export interface MasonryProps {
  /**
   * @default 3
   */
  column?: number;
  /**
   * @default 10
   */
  gap?: number;
  children: ReactElement[];
}

export type MasonryStyleProps = Omit<MasonryProps, "children"> & Translate;
