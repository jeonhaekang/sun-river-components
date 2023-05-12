import { ReactElement } from "react";
import { Translate } from "../../utils";

export interface MasonryProps {
  column?: number;
  gap?: number;
  children: ReactElement[];
}

export type MasonryStyleProps = Omit<MasonryProps, "children"> & Translate;
