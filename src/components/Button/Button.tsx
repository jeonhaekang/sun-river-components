import * as Styled from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export const Button = ({
  label,
  disabled,
  isLoading,
  ...props
}: ButtonProps) => {
  return (
    <Styled.Button disabled={isLoading || disabled} {...props}>
      {label}

      {isLoading && <Styled.ButtonSpinner {...props} />}
    </Styled.Button>
  );
};
