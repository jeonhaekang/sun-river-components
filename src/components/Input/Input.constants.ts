export const RADIUS = 8;

export const STATUS = ["none", "success", "warning", "error"] as const;

export const TYPES = [
  "email",
  "number",
  "password",
  "tel",
  "text",
  "url",
  "date",
  "month",
  "datetime-local",
  "search",
  "week"
] as const;

export const STATUS_COLOR_MAP = {
  none: "blue",
  success: "green",
  warning: "orange",
  error: "red"
} as const;

export const TYPOGRAPHY_MAP = {
  small: "paragraph3",
  medium: "paragraph2",
  large: "paragraph1"
} as const;

export const PADDING_MAP = {
  small: 8,
  medium: 12,
  large: 16
} as const;

export const DEFAULT = {
  size: "medium",
  status: "none"
} as const;
