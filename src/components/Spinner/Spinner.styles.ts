import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { border, setSize, theme } from "../../styles";
import { DEFAULT, SPEED_MAP, WIDTH_MAP } from "./Spinner.constants";
import { SpinnerProps } from "./Spinner.types";

export const spinner = ({
  size = DEFAULT.size,
  width = DEFAULT.width,
  color = DEFAULT.color,
  speed = DEFAULT.speed
}: SpinnerProps) => {
  const spinnerSize = theme.size[size] - 12;

  return css`
    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    ${setSize(spinnerSize, spinnerSize)}

    ${border({
      width: WIDTH_MAP[width],
      radius: "50%",
      color: theme.colors[color]
    })}
    border-bottom-color: transparent;

    animation: rotation ${SPEED_MAP[speed]}ms linear infinite;

    box-sizing: border-box;
  `;
};

export const Spinner = styled.span<SpinnerProps>`
  ${props => spinner(props)};
`;
