import { SizeKey } from "../../styles";
import { OneOf } from "../../utils";
import { STATUS } from "../Input";
import { TEXTAREA_RESIZE } from "./TextArea.constants";

export interface TextAreaProps {
  /**
   * @default none
   */
  status?: OneOf<typeof STATUS>;
  /**
   * @default medium
   */
  size?: SizeKey;
  /**
   * @default none
   */
  resize?: OneOf<typeof TEXTAREA_RESIZE>;
}
