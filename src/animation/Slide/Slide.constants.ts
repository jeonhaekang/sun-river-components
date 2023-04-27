import { ANIMATION_DEFAULT } from "../Animation.constants";

export const DIRECTION = ["top", "right", "bottom", "left"] as const;

export const SLIDE_DEFAULT = {
  ...ANIMATION_DEFAULT,
  direction: "top"
} as const;

export const TRANSLATE_MAP = {
  top: { prefix: "-", translate: "translateY" },
  right: { prefix: "", translate: "translateX" },
  bottom: { prefix: "", translate: "translateY" },
  left: { prefix: "-", translate: "translateX" }
};
