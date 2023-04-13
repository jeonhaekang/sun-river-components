import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { setBorder, setSize, theme } from "~/styles";
import { spinnerSpeedMap, spinnerWidthMap } from "./Spinner.constants";
import { SpinnerProps } from "./Spinner.types";

const getDefaultStyle = ({
  size = "medium",
  width = "normal",
  color = "blue",
  speed = "normal"
}: SpinnerProps) => {
  const spinnerSize = theme.size[size] - 12;

  return css`
    ${setSize(spinnerSize, spinnerSize)}

    ${setBorder({
      width: `${spinnerWidthMap[width]}px`,
      radius: "50%",
      color: theme.colors[color]
    })}    

    animation: rotation ${spinnerSpeedMap[speed]}ms linear infinite;

    box-sizing: border-box;
  `;
};

export const Spinner = styled.span<SpinnerProps>`
  ${props => getDefaultStyle(props)};

  border-bottom-color: transparent;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
