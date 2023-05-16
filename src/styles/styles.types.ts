import { fontSize } from "./mixins";
import { colors, effect, palettes, size } from "./theme";

export type Size = typeof size;
export type SizeKey = keyof Size;

export type Colors = typeof colors;
export type ColorsKey = keyof Colors;

export type Palettes = typeof palettes;
export type PalettesKey = keyof Palettes;

export type FontSize = typeof fontSize;
export type FontSizeKey = keyof FontSize;

export type Shadow = typeof effect.shadow;
export type ShadowKey = keyof Shadow;
