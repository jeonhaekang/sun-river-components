import type { ButtonHTMLAttributes } from "react";
import { PalettesKey, SizeKey } from "~/styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: SizeKey;
  color?: PalettesKey;
}
