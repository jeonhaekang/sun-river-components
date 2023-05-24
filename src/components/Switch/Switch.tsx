import { forwardRef } from "react";
import * as Styled from "./Switch.styles";
import { SwitchProps } from "./Switch.types";

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ color, ...props }, ref) => {
    const styleProps = {
      color
    };

    const mergedProps = {
      ...styleProps,
      ...props
    };

    return <Styled.CheckBox ref={ref} type="checkbox" {...mergedProps} />;
  }
);
