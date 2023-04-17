export const VARIANTS = ["fill", "outline", "text"] as const;

export const TYPOGRAPHY_MAP = {
  large: "heading4",
  medium: "heading5",
  small: "heading6"
} as const;

export const PADDING_MAP = {
  large: 16,
  medium: 12,
  small: 8
} as const;

export const RADIUS = 8;

export const DEFAULT = {
  variant: "fill",
  size: "medium",
  color: "blue"
} as const;
