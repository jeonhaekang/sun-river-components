import { PropsWithChildren } from "react";
import { AnimationProps } from "../Animation.types";
import * as Styled from "./Fade.styles";

export const Fade = ({
  children,
  ...props
}: PropsWithChildren<AnimationProps>) => {
  return <Styled.Fade {...props}>{children}</Styled.Fade>;
};
