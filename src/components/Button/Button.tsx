import { forwardRef } from "react";
import {
  DEFAULT_COLOR,
  DEFAULT_SIZE,
  DEFAULT_VARIANTS
} from "./Button.constants";
import * as Styled from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      disabled,
      isLoading = false,
      variant = DEFAULT_VARIANTS,
      size = DEFAULT_SIZE,
      color = DEFAULT_COLOR,
      ...props
    },
    ref
  ) => {
    const styleProps = {
      variant,
      size,
      color
    };

    const mergedProps = {
      ...props,
      ...styleProps
    };

    return (
      <Styled.Button
        ref={ref}
        disabled={isLoading || disabled}
        {...mergedProps}
      >
        {label}

        {isLoading && <Styled.ButtonSpinner {...mergedProps} />}
      </Styled.Button>
    );
  }
);
