declare module Styles {
  type Size = typeof import("~/styles").size;
  type SizeKeyType = keyof Size;

  type ColorType = typeof import("~/styles").colors;
  type ColorKeyType = keyof ColorType;

  type PalettesType = typeof import("~/styles").palettes;
  type PalettesKeyType = keyof PalettesType;
}
