import { useInput } from "./Input.hooks";
import * as Styled from "./Input.styles";
import { InputProps } from "./Input.types";

export const Input = (props: InputProps) => {
  const app = useInput(props);

  const { size, leftAddon, rightAddon, ...rest } = props;

  const styleProps = {
    _size: size,
    leftAddon,
    rightAddon
  };

  if (app.hasAddon) {
    return (
      <Styled.InputContainer {...styleProps}>
        {leftAddon && <Styled.LeftAddon>{leftAddon}</Styled.LeftAddon>}

        <Styled.Input {...styleProps} {...rest} />

        {rightAddon && <Styled.RightAddon>{rightAddon}</Styled.RightAddon>}
      </Styled.InputContainer>
    );
  }

  return <Styled.Input {...styleProps} {...rest} />;
};
