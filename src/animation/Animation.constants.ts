export const PLAY = ["ready", "in", "out"] as const;

export const SPEED = ["normal", "slow", "fast"] as const;

export const SPEED_MAP = {
  fast: 200,
  normal: 400,
  slow: 700
} as const;

export const ANIMATION_DEFAULT = {
  play: "ready",
  speed: "normal"
} as const;
