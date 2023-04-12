import * as Styled from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export const Button = ({ label, ...props }: ButtonProps) => {
  return <Styled.Button {...props}>{label}</Styled.Button>;
};
