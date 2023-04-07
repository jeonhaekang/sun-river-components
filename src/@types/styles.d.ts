declare module Styles {
  type Size = typeof import("@styles/theme").size;
  type SizeKeyType = keyof Size;

  type ColorType = typeof import("@styles/theme").colors;
  type ColorKeyType = keyof ColorType;

  type PalettesType = typeof import("@styles/theme").palettes;
  type PalettesKeyType = keyof PalettesType;
}
