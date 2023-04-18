import { ReactElement } from "react";
import { LabelProps } from "../Label/Label.types";

export interface FormItemProps extends LabelProps {
  label?: string;
  description?: string;
  children: ReactElement;
}
