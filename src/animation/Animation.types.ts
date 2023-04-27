import { OneOf } from "../utils";
import { PLAY, SPEED } from "./Animation.constants";

export interface AnimationProps {
  /**
   * @default ready
   */
  play?: OneOf<typeof PLAY>;
  /**
   * @default normal
   */
  speed?: OneOf<typeof SPEED>;
}
