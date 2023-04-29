import { SizeKey } from "../../styles";
import { OneOf } from "../../utils";
import { STATUS } from "../Input";
import { TEXTAREA_RESIZE } from "./TextArea.constants";

export interface TextAreaProps {
  status?: OneOf<typeof STATUS>;
  size?: SizeKey;
  resize?: OneOf<typeof TEXTAREA_RESIZE>;
}
