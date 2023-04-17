import { InputHTMLAttributes, ReactNode } from "react";
import { SizeKey } from "~/styles";
import { STATUS, TYPES } from "./Input.constants";

type Input = InputHTMLAttributes<HTMLInputElement>;

export interface InputProps extends Omit<Input, "size" | "type"> {
  type?: (typeof TYPES)[number];
  status?: (typeof STATUS)[number];
  size?: SizeKey;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
}

export interface InputStyleProps extends Omit<InputProps, "size"> {
  _size?: InputProps["size"];
}
