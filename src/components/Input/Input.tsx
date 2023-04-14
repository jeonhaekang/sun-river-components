import * as Styled from "./Input.styles";
import { InputProps, InputType } from "./Input.types";

export const Input = ({ size, ...props }: InputProps & InputType) => {
  return (
    <Styled.InputWrapper size={size}>
      <Styled.Input {...props} />
    </Styled.InputWrapper>
  );
};
