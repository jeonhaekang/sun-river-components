import { forwardRef } from "react";
import * as Styled from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, disabled, isLoading, ...props }, ref) => {
    return (
      <Styled.Button disabled={isLoading || disabled} {...props} ref={ref}>
        {label}

        {isLoading && <Styled.ButtonSpinner {...props} />}
      </Styled.Button>
    );
  }
);
