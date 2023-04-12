import { ColorsKey, SizeKey } from "~/styles";

export interface SpinnerProps {
  size?: SizeKey;
  width?: "thin" | "normal" | "bold";
  speed?: "slow" | "normal" | "fast";
  color?: ColorsKey;
}
