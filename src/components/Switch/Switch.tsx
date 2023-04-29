import * as Styled from "./Switch.styles";
import { SwitchProps } from "./Switch.types";

export const Switch = ({ color, ...props }: SwitchProps) => {
  const styleProps = {
    color
  };

  const mergedProps = {
    ...styleProps,
    ...props
  };

  return <Styled.CheckBox type="checkbox" {...mergedProps} />;
};
