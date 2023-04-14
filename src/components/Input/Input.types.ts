import { InputHTMLAttributes } from "react";
import { SizeKey } from "~/styles";

export type InputType = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

export interface InputProps {
  size: SizeKey;
}
