import "@emotion/react";
import { theme } from "~/styles";

declare module "@emotion/react" {
  type EmotionTheme = typeof theme;

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends EmotionTheme {}
}
