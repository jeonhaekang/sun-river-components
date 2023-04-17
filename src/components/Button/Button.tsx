import { forwardRef } from "react";
import { DEFAULT } from "./Button.constants";
import * as Styled from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      disabled,
      isLoading,
      variant = DEFAULT.variant,
      size = DEFAULT.size,
      color = DEFAULT.color,
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
