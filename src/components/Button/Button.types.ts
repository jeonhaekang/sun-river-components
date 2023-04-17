import type { ButtonHTMLAttributes } from "react";
import { PalettesKey, SizeKey } from "~/styles";
import { VARIANTS } from "./Button.constants";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: (typeof VARIANTS)[number];
  label: string;
  size?: SizeKey;
  color?: PalettesKey;
  isLoading?: boolean;
}

export type ButtonPropsWithoutLabel = Omit<ButtonProps, "label">;
