import { InputHTMLAttributes } from "react";
import { PalettesKey } from "../../styles";

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  /**
   * @default blue
   */
  color?: PalettesKey;
}
