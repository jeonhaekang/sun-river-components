import { InputHTMLAttributes, ReactNode } from "react";
import { SizeKey } from "~/styles";
import { OneOf } from "~/utils";
import { STATUS, TYPES } from "./Input.constants";

type Input = InputHTMLAttributes<HTMLInputElement>;

export interface InputProps extends Omit<Input, "size" | "type"> {
  type?: OneOf<typeof TYPES>;
  status?: OneOf<typeof STATUS>;
  size?: SizeKey;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
}

export interface InputStyleProps extends Omit<InputProps, "size"> {
  _size?: InputProps["size"];
}
