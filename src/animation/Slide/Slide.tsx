import { PropsWithChildren } from "react";
import * as Styled from "./Slide.styles";
import { SlideProps } from "./Slide.types";

export const Slide = (props: PropsWithChildren<SlideProps>) => {
  return <Styled.Slide {...props} />;
};
