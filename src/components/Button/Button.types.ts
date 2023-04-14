import type { ButtonHTMLAttributes } from "react";
import { PalettesKey, SizeKey } from "~/styles";
import { buttonVariants } from "./Button.constants";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: (typeof buttonVariants)[number];
  label: string;
  size?: SizeKey;
  color?: PalettesKey;
  isLoading?: boolean;
}

export type ButtonPropsWithoutLabel = Omit<ButtonProps, "label">;
