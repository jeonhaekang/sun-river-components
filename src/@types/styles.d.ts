declare module Styles {
  type Size = typeof import("~/styles").size;
  type SizeKey = keyof Size;

  type Colors = typeof import("~/styles").colors;
  type ColorsKey = keyof Colors;

  type Palettes = typeof import("~/styles").palettes;
  type PalettesKey = keyof Palettes;

  type FontSize = typeof import("~/styles").fontSize;
  type FontSizeKey = keyof FontSize;
}
