import { InputHTMLAttributes, ReactNode } from "react";
import { SizeKey } from "~/styles";

type WithoutSize<T> = Omit<T, "size">;

export interface InputProps
  extends WithoutSize<InputHTMLAttributes<HTMLInputElement>> {
  status?: "default" | "success" | "warning" | "error";
  size?: SizeKey;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
}

export interface InputStyleProps extends WithoutSize<InputProps> {
  _size?: InputProps["size"];
}
