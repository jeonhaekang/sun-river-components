import { css } from "@emotion/react";
import { theme } from "../../theme";
import { unitToPx } from "../common";
import { BorderProps } from "./border.types";

export const border = ({
  width = 1,
  color = theme.colors.gray2,
  style = "solid",
  radius,
  direction
}: BorderProps = {}) => {
  const border = `${unitToPx(width)} ${style} ${color}`;

  return css`
    ${direction ? `border-${direction}: ${border};` : `border: ${border};`};

    ${radius && `border-radius: ${unitToPx(radius)};`}
  `;
};

const top = (props: Omit<BorderProps, "direction">) => {
  return border({ ...props, direction: "top" });
};

const right = (props: Omit<BorderProps, "direction">) => {
  return border({ ...props, direction: "right" });
};

const bottom = (props: Omit<BorderProps, "direction">) => {
  return border({ ...props, direction: "bottom" });
};

const left = (props: Omit<BorderProps, "direction">) => {
  return border({ ...props, direction: "left" });
};

border.top = top;
border.right = right;
border.bottom = bottom;
border.left = left;
