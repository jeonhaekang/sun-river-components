import type { ButtonHTMLAttributes } from "react";
import { PalettesKey, SizeKey } from "~/styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "text";
  label: string;
  size?: SizeKey;
  color?: PalettesKey;
}

export type ButtonPropsWithoutLabel = Omit<ButtonProps, "label">;
