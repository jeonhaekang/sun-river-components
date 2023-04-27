import { PropsWithChildren } from "react";
import * as Styled from "./Scale.styles";
import { ScaleProps } from "./Scale.types";

export const Scale = ({
  children,
  ...props
}: PropsWithChildren<ScaleProps>) => {
  return <Styled.Fade {...props}>{children}</Styled.Fade>;
};
