import { forwardRef } from "react";
import { DEFAULT_SIZE } from "./Input.constants";
import * as Styled from "./Input.styles";
import { InputProps } from "./Input.types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size = DEFAULT_SIZE, leftAddon, rightAddon, disabled, ...props }, ref) => {
    const styleProps = {
      _size: size,
      leftAddon,
      rightAddon,
      disabled
    };

    const mergedProps = {
      ...props,
      ...styleProps
    };

    if (leftAddon || rightAddon) {
      return (
        <Styled.InputContainer {...styleProps}>
          {leftAddon && <Styled.LeftAddon>{leftAddon}</Styled.LeftAddon>}

          <Styled.Input ref={ref} {...mergedProps} />

          {rightAddon && <Styled.RightAddon>{rightAddon}</Styled.RightAddon>}
        </Styled.InputContainer>
      );
    }

    return <Styled.Input ref={ref} {...mergedProps} />;
  }
);
