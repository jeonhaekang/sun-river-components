import { ColorsKey, FontSizeKey } from "../../styles";

export interface TypographyProps {
  /**
   * @default paragraph2
   */
  size?: FontSizeKey;
  /**
   * @default black
   */
  color?: ColorsKey;
}
