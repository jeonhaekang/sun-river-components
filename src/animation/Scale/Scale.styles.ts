import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { SPEED_MAP } from "../Animation.constants";
import { SCALE_DEFAULT } from "./Scale.constants";
import { ScaleProps } from "./Scale.types";

const getScaleKeyframes = (baseScale: ScaleProps["baseScale"]) => {
  return css`
    @keyframes scaleIn {
      from {
        transform: scale(${baseScale});
      }
      to {
        transform: scale(1);
      }
    }

    @keyframes scaleOut {
      from {
        transform: scale(1);
      }
      to {
        transform: scale(${baseScale});
      }
    }
  `;
};

const getAnimation = (name: string, speed: ScaleProps["speed"] = "normal") => {
  return css`
    animation-name: ${name};
    animation-duration: ${SPEED_MAP[speed]}ms;
    animation-fill-mode: forwards;
  `;
};

export const Fade = styled.div<ScaleProps>`
  display: inline-block;

  ${({ baseScale = 0 }) => getScaleKeyframes(baseScale)}

  ${({ play = SCALE_DEFAULT.play, speed = SCALE_DEFAULT.speed }) => {
    switch (play) {
      case "in":
        return getAnimation("scaleIn", speed);
      case "out":
        return getAnimation("scaleOut", speed);
      default:
        return css`
          transform: scale(0);
        `;
    }
  }}
`;
