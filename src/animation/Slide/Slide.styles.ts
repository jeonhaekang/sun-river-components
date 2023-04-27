import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { SPEED_MAP } from "../Animation.constants";
import { SLIDE_DEFAULT, TRANSLATE_MAP } from "./Slide.constants";
import { SlideProps } from "./Slide.types";

const getSlideKeyframes = (
  direction: SlideProps["direction"] = SLIDE_DEFAULT.direction
) => {
  const { prefix, translate } = TRANSLATE_MAP[direction];

  return css`
    @keyframes slideIn {
      from {
        transform: ${translate}(${`${prefix}100%`});
      }
      to {
        transform: ${translate}(${`${prefix}0%`});
      }
    }

    @keyframes slideOut {
      from {
        transform: ${translate}(${`${prefix}0%`});
      }
      to {
        transform: ${translate}(${`${prefix}100%`});
      }
    }
  `;
};

const getAnimation = (name: string, speed: SlideProps["speed"] = "normal") => {
  return css`
    animation-name: ${name};
    animation-duration: ${SPEED_MAP[speed]}ms;
    animation-fill-mode: forwards;
  `;
};

export const Slide = styled.div<SlideProps>`
  display: inline-block;

  ${({ direction = SLIDE_DEFAULT.direction }) => getSlideKeyframes(direction)}

  ${({
    play = SLIDE_DEFAULT.play,
    speed = SLIDE_DEFAULT.speed,
    direction = SLIDE_DEFAULT.direction
  }) => {
    const { prefix, translate } = TRANSLATE_MAP[direction];

    switch (play) {
      case "in":
        return getAnimation("slideIn", speed);
      case "out":
        return getAnimation("slideOut", speed);
      default:
        return css`
          transform: ${translate}(${`${prefix}100%`});
        `;
    }
  }}
`;
