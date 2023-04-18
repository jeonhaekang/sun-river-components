import { ColorsKey, SizeKey } from "../../styles";
import { OneOf } from "../../utils";
import { SPEED, WIDTH } from "./Spinner.constants";

export interface SpinnerProps {
  size?: SizeKey;
  width?: OneOf<typeof WIDTH>;
  speed?: OneOf<typeof SPEED>;
  color?: ColorsKey;
}
