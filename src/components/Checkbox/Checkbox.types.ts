import { PalettesKey } from "../../styles";
import { OneOf } from "../../utils";
import { CHECKBOX_MARK } from "./Checkbox.constants";

export interface CheckboxProps {
  /**
   * @default blue
   */
  color?: PalettesKey;
  /**
   * @default check
   */
  mark?: OneOf<typeof CHECKBOX_MARK>;
}
