import { OneOf } from "../../utils";
import { AnimationProps } from "../Animation.types";
import { DIRECTION } from "./Slide.constants";

export interface SlideProps extends AnimationProps {
  /**
   * @default up
   */
  direction?: OneOf<typeof DIRECTION>;
}
