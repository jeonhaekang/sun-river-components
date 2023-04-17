import { useMemo } from "react";
import { DEFAULT_SIZE } from "./Input.constants";
import * as Styled from "./Input.styles";
import { InputProps } from "./Input.types";

export const Input = ({
  size = DEFAULT_SIZE,
  leftAddon,
  rightAddon,
  disabled,
  ...props
}: InputProps) => {
  const styleProps = {
    _size: size,
    leftAddon,
    rightAddon,
    disabled
  };

  const hasAddon = useMemo(
    () => leftAddon || rightAddon,
    [leftAddon, rightAddon]
  );

  if (hasAddon) {
    return (
      <Styled.InputContainer {...styleProps}>
        {leftAddon && <Styled.LeftAddon>{leftAddon}</Styled.LeftAddon>}

        <Styled.Input {...styleProps} {...props} />

        {rightAddon && <Styled.RightAddon>{rightAddon}</Styled.RightAddon>}
      </Styled.InputContainer>
    );
  }

  return <Styled.Input {...styleProps} {...props} />;
};
