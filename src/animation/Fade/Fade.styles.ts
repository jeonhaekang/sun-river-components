import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ANIMATION_DEFAULT, SPEED_MAP } from "../Animation.constants";
import { AnimationProps } from "../Animation.types";

const keyframes = css`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const getAnimation = (
  name: string,
  speed: AnimationProps["speed"] = "normal"
) => {
  return css`
    animation-name: ${name};
    animation-duration: ${SPEED_MAP[speed]}ms;
    animation-fill-mode: forwards;
  `;
};

export const Fade = styled.div<AnimationProps>`
  ${keyframes}

  opacity: 0;

  ${({ play = ANIMATION_DEFAULT.play, speed = ANIMATION_DEFAULT.speed }) => {
    switch (play) {
      case "in":
        return getAnimation("fadeIn", speed);
      case "out":
        return getAnimation("fadeOut", speed);
      default:
        return css`
          opacity: 0;
        `;
    }
  }}
`;
