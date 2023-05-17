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

export const fade = ({
  play = ANIMATION_DEFAULT.play,
  speed = ANIMATION_DEFAULT.speed
}: AnimationProps) => {
  let animation;

  switch (play) {
    case "in":
      animation = getAnimation("fadeIn", speed);
      break;
    case "out":
      animation = getAnimation("fadeOut", speed);
      break;
    default:
      animation = css`
        opacity: 0;
      `;
  }

  return css`
    ${keyframes}

    opacity: 0;
    ${animation}
  `;
};

export const Fade = styled.div<AnimationProps>`
  ${props => fade(props)}
`;
