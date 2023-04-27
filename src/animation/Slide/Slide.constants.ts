import { ANIMATION_DEFAULT } from "../Animation.constants";

export const DIRECTION = ["up", "right", "down", "left"] as const;

export const SLIDE_DEFAULT = {
  ...ANIMATION_DEFAULT,
  direction: "up"
} as const;

export const TRANSLATE_MAP = {
  up: { prefix: "-", translate: "translateY" },
  right: { prefix: "", translate: "translateX" },
  down: { prefix: "", translate: "translateY" },
  left: { prefix: "-", translate: "translateX" }
};
