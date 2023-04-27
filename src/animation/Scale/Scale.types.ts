import { AnimationProps } from "../Animation.types";

export interface ScaleProps extends AnimationProps {
  /**
   * @default 0
   */
  baseScale?: 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9;
}
