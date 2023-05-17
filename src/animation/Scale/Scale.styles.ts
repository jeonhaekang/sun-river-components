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

export const scale = ({
  baseScale = 0,
  play = SCALE_DEFAULT.play,
  speed = SCALE_DEFAULT.speed
}: ScaleProps) => {
  let animation;

  switch (play) {
    case "in":
      animation = getAnimation("scaleIn", speed);
      break;
    case "out":
      animation = getAnimation("scaleOut", speed);
      break;
    default:
      animation = css`
        transform: scale(0);
      `;
  }

  return css`
    ${getScaleKeyframes(baseScale)}

    ${animation}
  `;
};

export const Scale = styled.div<ScaleProps>`
  display: inline-block;

  ${props => scale(props)}
`;
