import { DEFAULT } from "./Spinner.constants";
import * as Styled from "./Spinner.styles";
import { SpinnerProps } from "./Spinner.types";

export const Spinner = ({
  color = DEFAULT.color,
  width = DEFAULT.width,
  speed = DEFAULT.speed,
  size = DEFAULT.size
}: SpinnerProps) => {
  const styleProps = {
    color,
    width,
    speed,
    size
  };

  return <Styled.Spinner {...styleProps} />;
};
