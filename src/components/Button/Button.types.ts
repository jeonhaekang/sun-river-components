import type { ButtonHTMLAttributes } from "react";
import { PalettesKey, SizeKey } from "~/styles";
import { OneOf } from "~/utils";
import { VARIANTS } from "./Button.constants";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: OneOf<typeof VARIANTS>;
  label: string;
  size?: SizeKey;
  color?: PalettesKey;
  isLoading?: boolean;
}

export type ButtonPropsWithoutLabel = Omit<ButtonProps, "label">;
