import { ColorsKey, SizeKey } from "~/styles";
import { spinnerSpeed, spinnerWidth } from "./Spinner.constants";

export interface SpinnerProps {
  size?: SizeKey;
  width?: (typeof spinnerWidth)[number];
  speed?: (typeof spinnerSpeed)[number];
  color?: ColorsKey;
}
