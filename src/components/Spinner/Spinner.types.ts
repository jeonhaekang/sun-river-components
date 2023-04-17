import { ColorsKey, SizeKey } from "~/styles";
import { SPEED, WIDTH } from "./Spinner.constants";

export interface SpinnerProps {
  size?: SizeKey;
  width?: (typeof WIDTH)[number];
  speed?: (typeof SPEED)[number];
  color?: ColorsKey;
}
