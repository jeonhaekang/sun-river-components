import { css } from "@emotion/react";
import { theme } from "~/styles";
import { SetBorderProps } from "./border.types";

export const setBorder = ({
  width = "1px",
  color = theme.colors.black,
  style = "solid",
  radius = 0,
  direction
}: SetBorderProps) => {
  const border = `${width} ${style} ${color}`;

  return css`
    ${direction ? `border-${direction}: ${border};` : `border: ${border};`}
    border-radius: ${radius};
  `;
};
