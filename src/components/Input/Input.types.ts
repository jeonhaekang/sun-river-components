import { InputHTMLAttributes, ReactNode } from "react";
import { SizeKey } from "~/styles";
import { INPUT_STATUS, INPUT_TYPES } from "./Input.constants";

type Input = InputHTMLAttributes<HTMLInputElement>;

export interface InputProps extends Omit<Input, "size" | "type"> {
  type?: (typeof INPUT_TYPES)[number];
  status?: (typeof INPUT_STATUS)[number];
  size?: SizeKey;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
}

export interface InputStyleProps extends Omit<InputProps, "size"> {
  _size?: InputProps["size"];
}
