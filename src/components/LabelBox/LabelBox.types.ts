import { ReactElement } from "react";
import { LabelProps } from "../Label/Label.types";

export interface LabelBoxProps extends LabelProps {
  label?: string;
  desc?: string;
  children: ReactElement;
}
